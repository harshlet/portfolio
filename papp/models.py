from django.db import models
from django.db.models.fields.files import ImageField

# Create your models here.
class skill(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='image/skills')

class Project(models.Model):
    title = models.CharField(max_length=200)
    technology = models.CharField(max_length=240)
    description = models.TextField()
    image = models.ImageField(upload_to='image/project')

class ContactForm(models.Model):
    contactno = models.CharField(max_length=15)
    email = models.EmailField()
    name = models.CharField(max_length=40)
    comments = models.TextField()