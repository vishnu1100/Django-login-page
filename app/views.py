from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login

# Create your views here.

def index(request):
    return render(request, 'index.html')

def error(request):
    return render(request, 'error.html')
# login function 
def loginn(request):

    if request.method =="POST":
        username=request.POST['username']
        password=request.POST['password']
        user=authenticate(username=username,password=password)
        if user is not None:
            login(request,user)
            response=redirect('error')
            return response
        else:
            return redirect('signup')


    return render(request, 'login.html')





# registering function 
def signup(request):

    if request.method == "POST":
       username = request.POST['username']
       email = request.POST['email']
       password = request.POST['password']

       myuser = User.objects.create_user(username,email,password)
       myuser.save()

       return redirect('login')

    return render(request, 'signup.html')