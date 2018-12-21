var xhr = new XMLHttpRequest();

xhr.onload = res => {
    console.log(res.target.status)
    var result = res.target.responseText
    console.log(JSON.parse(result))
}

xhr.open('GET', 'https://api.github.com/repos/bitfishxyz/ajax/issues/2/comments');
xhr.send();