from django.urls import path
from . import views

urlpatterns = [
    path("randomcat/", views.display_random_cat, name="randomcat"),
]
