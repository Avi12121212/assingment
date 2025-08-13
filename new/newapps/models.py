from django.db import models

# Create your models here.
from django.db import models

class Myuser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=20)
    mobile_no = models.CharField(max_length=15)
    pincode = models.CharField(max_length=10)
    address = models.CharField(max_length=50 , null= True, blank= True) # this is important concept for inserting colom in existing table

    def __str__(self):
        return f"{self.name,self.email,self.mobile_no,self.pincode,self.address}"
