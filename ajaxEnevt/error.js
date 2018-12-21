var xhr = new XMLHttpRequest();

xhr.onload = res => {
    console.log('onloadend')
}

xhr.onerror = ()=> {
    console.log('errrrrrrr')
}

xhr.open('GET', 'https://www.github.com');
xhr.send();