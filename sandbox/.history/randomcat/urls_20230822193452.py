from django.urls import path
from . import views

urlpatterns = [
    path("random_cat/", views.random_cat, name="random_cat"),
]
