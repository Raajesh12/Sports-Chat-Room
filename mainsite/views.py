from django.shortcuts import render
from django.contrib.auth import authenticate, login as LOGIN, logout as LOGOUT
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from mainsite import forms
from .models import *
from django.contrib.auth.models import User


def home(request):
    dict = {}
    result = Category.objects.all()[:3]
    dict['result'] = result
    dict['authenticated'] = request.user.is_authenticated()

    return render(request, 'HomePage.html', dict)

def user_profile(request):
    donor = Donor.objects.get(username=request.user)
    all_donation = Donation.objects.filter(donor=donor).order_by('-date')

    d = {}
    d['portfolio'] = Portfolio.objects.all()[:4]
    d['donate_history'] = all_donation
    return render(request, 'Profile.html', d)

def logout(request):
    LOGOUT(request)
    return HttpResponseRedirect('/')

def login(request):
    form = forms.LoginForm()
    error = ""
    if request.method=='POST':
            form = forms.LoginForm(request.POST)
            if form.is_valid():
                    user = authenticate(username=form.cleaned_data['username'],password=form.cleaned_data['password'])
                    if user is not None:
                            LOGIN(request,user)
                            return HttpResponseRedirect('/')
                    else:
                            error = "Invalid Password or Username"
            else:
                    error = "Please input valid credentials"
    return render(request,"UserLogin.html",{"form":form,"error":error})

def signup(request):
    form = forms.SignUpForm()
    error = ""
    if request.method=='POST':
        form = forms.SignUpForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            password = form.cleaned_data['password']
            email = form.cleaned_data['email']
            affiliation = form.cleaned_data['affiliation']
            user = User.objects.create_user(username, password=password)
            user.save()
            donor = Donor(username=user, first_name=first_name, last_name=last_name, email=email,affiliation=affiliation)
            donor.save()
            LOGIN(request, user)
            return HttpResponseRedirect('/')
        else:
            error = "something went wrong"
    return render(request,"SignUp.html",{"form":form,"error":error})

