var xhr = new XMLHttpRequest();

xhr.onloadstart = res => {
    console.log('onloadstart')
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

xhr.open('GET', 'https://api.github.com/repos/bitfishxyz/ajax/issues/2');
xhr.send();
