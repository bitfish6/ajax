var xhr = new XMLHttpRequest();

xhr.onloadstart = res => {
    console.log('onloadstart')
    console.log(res.target.status)
    console.log(res.target.responseText)
    console.log(res.target.getAllResponseHeaders())
}

xhr.onprogress = res => {
    console.log('onprogress')
    console.log(res.target.status)
    console.log(res.target.responseText)
    console.log(res.target.getAllResponseHeaders())
}

xhr.onload = res => {
    console.log('onload')
    console.log(res.target.status)
    console.log(res.target.responseText)
    console.log(res.target.getAllResponseHeaders())
}

xhr.onloadend = res => {
    console.log('onloadend')
    console.log(res.target.status)
    console.log(res.target.responseText)
    console.log(res.target.getAllResponseHeaders())
    console.log(res.target.getResponseHeader('x-ratelimit-remaining'))
}

xhr.open('GET', 'https://www.google.com/search?q=stack+overflow');
xhr.send();