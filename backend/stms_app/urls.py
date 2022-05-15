from django.urls import path, include 
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register("users", views.UserViewSet, basename='user')
router.register("soldiers", views.SoldierViewSet, basename='soldier')
router.register("comments", views.CommentViewSet, basename="comment")

urlpatterns = [
    path('', include(router.urls)),
]
