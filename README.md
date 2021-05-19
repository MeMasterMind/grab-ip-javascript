# fetch-ip-javascript
Easily get anybody's IP address who visits your website with 3 lines of Vanilla browser javascript.

## _"Give it to me!"_

```javascript
fetch('https://api.ipify.org?format=json')
    .then(results => results.json())    
    .then(data => console.log(data.ip));

```

that's it! easy, no?

---

<p>this is just a code snippet to help people. I am not responsible in any way of it's illicit or unintended use.</p>
