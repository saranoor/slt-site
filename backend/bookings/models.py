from django.db import models


class Booking(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    date = models.DateField()
    time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-date", "-time"]

    def __str__(self) -> str:
        return f"{self.name} on {self.date} at {self.time}"
