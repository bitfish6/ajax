var xhr = new XMLHttpRequest();

xhr.onloadstart = res => {
    console.log('onloadstart')
    xhr.abort()
}

xhr.onprogress = res => {
    console.log('onprogress')
}

xhr.onload = res => {
    console.log('onload')
}

xhr.onloadend = res => {
    console.log('onloadend')
}

xhr.onabort = res => {
    console.log('onabort...')
}

xhr.open('GET', 'https://api.github.com/repos/bitfishxyz/ajax/issues/2');
xhr.send();

xhr.abort()