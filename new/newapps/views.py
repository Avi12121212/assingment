from django.shortcuts import render
from .models import Myuser

# Create your views here.
def poscorner(request):
    myuser=Myuser(name='avinash',email="avinash@gmail.com",mobile_no="7985439176",pincode="221002",)
    myuser.save()

    return render (request,"poscorner.html")