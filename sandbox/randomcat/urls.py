from django.urls import path
from . import views

urlpatterns = [
    path("smile/", views.display_random_cat, name="random_cat"),
]
