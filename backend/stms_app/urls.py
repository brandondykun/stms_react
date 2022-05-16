from django.urls import path, include 
from rest_framework.routers import DefaultRouter
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


router = DefaultRouter()
router.register("users", views.UserViewSet, basename='user')
router.register("soldiers", views.SoldierViewSet, basename='soldier')
router.register("comments", views.CommentViewSet, basename="comment")

urlpatterns = [
    path('', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
