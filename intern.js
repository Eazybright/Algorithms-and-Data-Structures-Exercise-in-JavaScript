// const base64 = require('js-base64').Base64;
// const message = 'aHR0cDovL3JlY3J1aXQtaWZlLnRlcnJhZ29uZ3JvdXAuY29tLw==';
// const decodeMessage = (msg) => {
//     return base64.decode(message);
// };
// console.log(decodeMessage(message));
// var decode = decodeURIComponent(message);
// console.log(decode);
// {
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var request = new XMLHttpRequest();
// request.open('GET', 'https://api.ipdata.co/?api-key=test');
// request.setRequestHeader('Accept', 'application/json');
// request.onreadystatechange = () => {
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//     }
// };
// request.send();
// }
fetch('https://ipstack.com', { mode: 'no-cors' })
    .then(res => res.json())
    .then(response => {
        console.log('Country :', response.country);
    })
    .catch((data, status) => {
        console.log('request failed');
    })