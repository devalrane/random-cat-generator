from django.shortcuts import render
from django.http import JsonResponse
from . import catfetcher


# Create your views here.
def display_random_cat(request):
    cat_url = catfetcher.get_random_cat_image()
    context = {"cat_url": cat_url}
    return render(request, "catimages/random_cat.html", context)
