from django.db import models

# Create your models here.

class Shirt(models.Model):
    shirt_name=models.CharField(max_length=30)
    shirt_price=models.IntegerField()
    shirt_description=models.CharField(max_length=50)
    shirt_img=models.ImageField(upload_to='images')

    def __str__(self):
        return self.shirt_name


    class Meta:
        db_table='shirt'

class Login(models.Model):
    user_name=models.CharField(max_length=30)
    user_email=models.EmailField()
    user_password=models.CharField(max_length=20)
    confirm_password=models.CharField(max_length=20)

    def __str__(self):
        return self.user_name




