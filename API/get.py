import requests

def get_dev():
    res= requests.get(
        "https://api.apis.guru/v2/list.json",
    )
    
    return res


print(get_dev())