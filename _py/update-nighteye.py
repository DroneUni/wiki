import requests
import os

url = "https://droneuni.cf/all-html-elements/"
res = requests.post("https://service.nighteye.app/api/convert",json={"ac":"a","pl":{"urls":[url]}})

print(res.status_code)
if res.status_code != 200:
    raise Exception("Received bad status code: "+str(res.status_code))
json = res.json()
if json["status"] != 0:
    raise Exception("Received bad status: "+str(json["status"])+"\nmsg: "+json["msg"])

css="@mixin nighteye {"+json["obj"][0].replace('\r','').replace('\n','')+"}"

if not os.path.exists("_sass"):
    os.makedirs("_sass")

with open("_sass/_nighteye.scss",'w') as f:
    f.write(css)
