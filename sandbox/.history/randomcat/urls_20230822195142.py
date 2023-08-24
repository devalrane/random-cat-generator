from django.urls import path
from . import views

urlpatterns = [
    path("random_cat/", views.display_random_cat, name="random_cat"),
]
