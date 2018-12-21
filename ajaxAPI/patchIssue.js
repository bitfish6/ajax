var xhr = new XMLHttpRequest();

xhr.onload = res => {
    console.log(res.target.status)
    var result = res.target.responseText
    console.log(JSON.parse(result))
}

xhr.open('POST', 'https://api.github.com/repos/bitfishxyz/ajax/issues/4');
xhr.setRequestHeader('Authorization','bearer 6ce64984e6dd9186b2146108d1947c52ff1ab313')

var message = {
    title: 'I come from AJAX!',
    body: "I come from ajax!!!"
  }
xhr.send(JSON.stringify(message));