from django.shortcuts import render,redirect
from rest_framework import viewsets
from .models import Shirt,Login
from .serializers import ShirtSeri
from rest_framework.permissions import IsAuthenticated
import re
from django.core.validators import ValidationError
from django.http import HttpResponse


# Create your views here.

def IndexPage(request):
   shirt_obj=Shirt.objects.all()
   return render(request,'shopapp/index.html',{'sobj':shirt_obj})


class ViewSetsVeiw(viewsets.ModelViewSet):
   queryset =Shirt.objects.all()
   serializer_class = ShirtSeri
   permission_classes = [IsAuthenticated]

def LoginRegister(request,pk):
   if pk==1:

      if request.method == "POST":
         shirtobj=Shirt.objects.all()
         email=request.POST.get('email')
         password= request.POST.get('password')
         try:
            obj=Login.objects.get(user_email=email)
            if password==obj.user_password:
               return render(request,'shopapp/addtocart.html',{'params':obj.user_name,'items':shirtobj})
            else:
               return HttpResponse('Authentication Error Please Try Again...')
         except:
            raise ValidationError("Please enter valid user and password")


      else:
         return render(request, 'shopapp/authentication.html', {'params': ''})

   else:
      if request.method=='POST':
         sobj=Login()
         sobj.user_name=request.POST.get('name')
         sobj.user_email=request.POST.get('email')
         sobj.user_password=request.POST.get('password')
         sobj.confirm_password=request.POST.get('cpassword')
         try:
            sobj.save()
            return redirect('/')
         except:
            raise ValidationError('something went worng while insert the object ')
      else:
         return render(request,'shopapp/authentication.html',{'params':1})


#
# def Login(request):
#
#    if request.method=="POST":
#       return HttpResponse('its ok')
#    else:
#       return render(request,'shopapp/login.html')
#
#



