from django.conf import settings
from django.db import models
class Client(models.Model):
    'Generated Model'
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="client_user",)
    name = models.CharField(max_length=256,)
    age = models.PositiveIntegerField()
