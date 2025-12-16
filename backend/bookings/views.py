import json
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.http import JsonResponse
from django.utils.dateparse import parse_date, parse_time
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .models import Booking


@csrf_exempt
@require_http_methods(["POST", "GET"])
def create_booking(request):
    if request.method == "GET":
        bookings = [
            {
                "id": booking.id,
                "name": booking.name,
                "email": booking.email,
                "date": booking.date.isoformat(),
                "time": booking.time.strftime("%H:%M"),
                "created_at": booking.created_at.isoformat(),
            }
            for booking in Booking.objects.all().order_by("date", "time")
        ]
        return JsonResponse({"bookings": bookings})

    try:
        payload = json.loads(request.body.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return JsonResponse({"error": "Invalid JSON payload."}, status=400)

    name = (payload.get("name") or "").strip()
    email = (payload.get("email") or "").strip()
    date_raw = payload.get("date")
    time_raw = payload.get("time")

    errors = {}
    if not name:
        errors["name"] = "Name is required."

    if not email:
        errors["email"] = "Email is required."
    else:
        try:
            validate_email(email)
        except ValidationError:
            errors["email"] = "Enter a valid email address."

    date_parsed = parse_date(date_raw) if date_raw else None
    if not date_parsed:
        errors["date"] = "Enter a valid date (YYYY-MM-DD)."

    time_parsed = parse_time(time_raw) if time_raw else None
    if not time_parsed:
        errors["time"] = "Enter a valid time (HH:MM)."

    if errors:
        return JsonResponse({"errors": errors}, status=400)

    booking = Booking.objects.create(
        name=name,
        email=email,
        date=date_parsed,
        time=time_parsed,
    )

    return JsonResponse(
        {
            "id": booking.id,
            "message": "Appointment booked successfully.",
            "booking": {
                "name": booking.name,
                "email": booking.email,
                "date": booking.date.isoformat(),
                "time": booking.time.strftime("%H:%M"),
            },
        },
        status=201,
    )
