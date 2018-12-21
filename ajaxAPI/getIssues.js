var xhr = new XMLHttpRequest();

xhr.onload = res => {
    console.log(res)
    console.log(res.target.status)
    var result = res.target.responseText
    console.log(JSON.parse(result))
    console.log(res.target.getAllResponseHeaders())
    console.log(res.target.getResponseHeader('x-ratelimit-remaining'))
};

xhr.open('GET', 'https://api.github.com/repos/bitfishxyz/ajax/issues');
xhr.send();