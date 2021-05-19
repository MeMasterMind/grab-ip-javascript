# fetch-ip-javascript
Easily get anybody's IP address who visits your website with 5 lines of Vanilla browser javascript.

## _"Give it to me!"_

```javascript
var IPs = []

fetch('https://api.ipify.org?format=json')
    .then(results => results.json())    
    .then(data => console.log(data.ip));

```

that's it! easy, no?
