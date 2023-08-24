import requests
from PIL import Image
from io import BytesIO


def call_cat_api():
    cat_url = "https://api.thecatapi.com/v1/images/search"
    response = requests.get(cat_url)
    data = response.json()
    image_url = data[0]["url"]
    return image_url


def get_random_cat():
    image_url = call_cat_api()
    response = requests.get(image_url)
    img_data = BytesIO(response.content)
    img = Image.open(img_data)
    # img.show()
    return img
