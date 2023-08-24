from django.shortcuts import render
from . import catfetcher


# Create your views here.


def display_random_cat(request):
    cat_url = catfetcher.fetch_random_cat()  # Replace with your fetching logic
    context = {"cat_url": cat_url}
    return render(request, "randomcat/random_cat.html", context)
