from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login

# Create your views here.

def index(request):
    return render(request, 'home.html')

def error(request):
    return render(request, 'error.html')

def home(request):
    return render(request, 'home.html')


def signup(request):
    return render(request, 'home.html')










# login function 
def loginn(request):
    error_message = None  # Initialize error message

    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
          
            return redirect('https://1hd.to/home')
             #  # Redirect to the home page after successful login
        else:
            error_message = "Invalid username or password" 
          

    return render(request, 'login.html', {'error_message': error_message})




# registering / sign up  function 


def signup(request):
    if request.method == "POST":
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
            # User with the same username or email already exists
            return render(request, 'signup.html', {'user_exist': True})

        # Create the user if it doesn't exist

        user = User.objects.create_user(username, email, password)
        user.save()
        return redirect('login')

    return render(request, 'signup.html')