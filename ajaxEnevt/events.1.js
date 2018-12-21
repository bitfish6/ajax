var xhr = new XMLHttpRequest();

xhr.onloadstart = res => {
    console.log(res.target.status)
    var result = res.target.responseText
    console.log(JSON.parse(result))
}

xhr.onprogress = res => {
    console.log(res.target.status)
    var result = res.target.responseText
    console.log(JSON.parse(result))
}

xhr.onload = res => {
    console.log(res.target.status)
    var result = res.target.responseText
    console.log(JSON.parse(result))
}

xhr.onloadend = res => {
    console.log(res.target.status)
    var result = res.target.responseText
    console.log(JSON.parse(result))
}

xhr.open('GET', 'https://api.github.com/repos/bitfishxyz/ajax/issues/2');
xhr.send();