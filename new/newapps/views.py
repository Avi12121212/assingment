from django.shortcuts import render
from .models import Myuser

# Create your views here.
def poscorner(request):
    # myuser=Myuser(name='avinash',email="avinash@gmail.com",mobile_no="7985439176",pincode="221002",)
    # myuser.save()  # this both lines are working very well data can save
    if request.POST:
        name=request.POST["full_name"]
        email=request.POST["email_id"]
        mobile=request.POST["mobile_number"]
        pincode=request.POST["pincode"]
        print(name,email,mobile,pincode)
    return render (request,"poscorner.html")


def contact(request):
    return render (request,'contact.html')