import requests

# def call_cat_api():
#     cat_url = "https://api.thecatapi.com/v1/images/search"
#     response = requests.get(cat_url)
#     data = response.json()
#     image_url = data[0]["url"]
#     return image_url


def get_random_cat_image():
    cat_url = "https://api.thecatapi.com/v1/images/search"
    response = requests.get(cat_url)
    data = response.json()
    image_url = data[0]["url"]

    json_response = {"image_url": image_url}

    return json_response
