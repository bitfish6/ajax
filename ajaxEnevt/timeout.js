var xhr = new XMLHttpRequest();

xhr.onloadend = () => {
    console.log('onloadend')
}
xhr.ontimeout = () => {
    console.log('ontimeout')
}

xhr.timeout = 3000

xhr.open('GET', 'https://api.github.com/repos/bitfishxyz/ajax/issues/2');
xhr.send();