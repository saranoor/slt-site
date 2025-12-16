from django.test import TestCase
from django.urls import reverse

from .models import Booking


class BookingApiTests(TestCase):
    def test_create_booking(self):
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "date": "2030-01-01",
            "time": "10:00",
        }
        response = self.client.post(
            reverse("create_booking"),
            data=payload,
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(Booking.objects.count(), 1)
        booking = Booking.objects.first()
        self.assertEqual(booking.name, payload["name"])
        self.assertEqual(booking.email, payload["email"])

    def test_validation_errors(self):
        response = self.client.post(
            reverse("create_booking"),
            data={"name": "", "email": "bad", "date": "bad", "time": "nope"},
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 400)
        self.assertIn("errors", response.json())
