var xhr = new XMLHttpRequest();

xhr.onloadstart = res => {
    console.log('onloadstart')
    console.log(`Loaded ${res.loaded} bytes`)
}

xhr.onprogress = res => {
    console.log('onprogress')
    console.log(`Loaded ${res.loaded} bytes`)
}

xhr.onload = res => {
    console.log('onload')
    console.log(`Loaded ${res.loaded} bytes`)
}

xhr.onloadend = res => {
    console.log('onloadend')
    console.log(`Loaded ${res.loaded} bytes`)
}
xhr.open('GET', 'https://www.google.com/search?q=stack+overflow');
xhr.send();
