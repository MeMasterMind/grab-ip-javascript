var IPs = []

fetch('https://api.ipify.org?format=json')
    .then(results => results.json())    
    .then(data => console.log(data.ip));


