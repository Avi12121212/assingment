from django.shortcuts import render
from .models import Myuser

# Create your views here.


def index(request):
    return render(request,"index.html")


def poscorner(request):
    myuser=Myuser(name='manish',email="manish@gmail.com",mobile_no="7985439175",pincode="221002",)
    myuser.save()  
    if request.POST:
        name=request.POST["full_name"]
        email=request.POST["email_id"]
        mobile=request.POST["mobile_number"]
        pincode=request.POST["pincode"]
        print(name,email,mobile,pincode)
    return render (request,"poscorner.html")


def contact(request):
    # data= Myuser.objects.all()
    print("data")
    return render (request,'contact.html')