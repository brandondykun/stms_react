from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *



class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class SoldierViewSet(viewsets.ModelViewSet):
    serializer_class = SoldierSerializer
    queryset = Soldier.objects.all()

class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
