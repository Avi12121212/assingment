import requests
from django.shortcuts import render, HttpResponse

def index(request):
    return render(request,"index.html")

def about(request):
    return render(request,"about.html")

def makeclaim(request):
    return render(request,'makeclaim.html')

def poscorner(request):
    return render (request,"poscorner.html")