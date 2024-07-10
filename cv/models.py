from django.db import models
from django.utils import timezone

class User(models.Model):
  name = models.CharField(max_length=100, blank=False)
  age = models.IntegerField(default=1)
  email = models.EmailField(blank=False)
  medicalCond = models.CharField(max_length=100, blank=False)
  medi_1 = models.CharField(max_length=100, blank=False)
  time_1 = models.DateTimeField(default= timezone.now)
  medi_2 = models.CharField(max_length=100, blank=False)
  time_2 = models.DateTimeField(default= timezone.now)
  encoding_vector = models.TextField(max_length=200, blank=False, default='NULL')
  
  def __str__(self):
        return self.name