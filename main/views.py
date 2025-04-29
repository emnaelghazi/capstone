from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib import messages
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

@csrf_exempt
def index(request):
    if not request.user.is_authenticated:
        return render(request, 'main/index.html')  # Serve React app for non-authenticated users
    return render(request, 'main/index.html')  # Serve main app for authenticated users

def login_view(request):
    if request.user.is_authenticated:
        return redirect('index')
        
    if request.method == 'POST':
        username = request.POST.get('email-username')
        password = request.POST.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            messages.error(request, 'Username or Password is incorrect')
            
    return render(request, 'main/login-basic.html')

def register_view(request):
    if request.user.is_authenticated:
        return redirect('index')
        
    form = UserCreationForm()
    
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('index')
        else:
            for error in form.error_messages.values():
                messages.error(request, error)

    return render(request, 'main/register-basic.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('login')

@csrf_exempt
def geoserver_proxy(request):
    geoserver_url = 'http://localhost:8080/geoserver/ne/wms'
    
    # Forward the query parameters
    params = request.GET.dict()
    
    try:
        # Make the request to GeoServer
        response = requests.get(geoserver_url, params=params)
        
        # Return the JSON response
        return JsonResponse(response.json(), safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
