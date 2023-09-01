from django.http import HttpResponse, JsonResponse
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
import json
import jwt
from decouple import config
from django.contrib.auth import get_user_model
User=get_user_model()

# Create your views here.


def Register(request):
    if request.method == "POST":
        body = json.loads(request.body)
        username = body.get('username')
        email = body.get('email')
        password = body.get('password')
        role=body.get('role','student')
        print(email,password)

        # Check if a user with the provided email already exists
        is_user_present = User.objects.filter(email=email).exists()
        if is_user_present:
            return JsonResponse({"msg": "User already present"})
        else:
            hashed_pass = make_password(password)
            user = User.objects.create(
                username=username, email=email, password=hashed_pass,role=role)
            return JsonResponse({"msg": "Registration Successful"})
    else:
        return JsonResponse({"msg": "Some error occurred"})


def Login(request):
    if request.method == "POST":
        body = json.loads(request.body)
        email = body.get('email')
        password = body.get('password')
        secretkey=config("secret_key")
        print(email,password)
        try:
            UserModel = User.objects.get(email=email)
            user = authenticate(email=email, password=password)
            if user is not None:
                payload = {
                    'userid': user.id  # Token expiration time
                }
                token = jwt.encode(payload, secretkey, algorithm='HS256')
                obj={
                    "id":user.id,
                    "name":user.username,
                    "email":user.email,
                    "role":user.role
                }
                return JsonResponse({"msg": "login succesfull","user":obj,"token":token})
        except User.DoesNotExist:
            return JsonResponse({"msg": "User Does Not exist"})
    else:
        return JsonResponse({"msg": "Wrong routes"})


def Logout(req):
    logout(req)
    return JsonResponse({"msg": "Logout Succesful"})