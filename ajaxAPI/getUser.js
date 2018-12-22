var xhr = new XMLHttpRequest()

xhr.onload = res => {
    console.log(res.target.status)
    var user = JSON.parse(res.target.responseText)
    console.log(user.name)
}

xhr.open('GET', 'https://api.github.com/user');
xhr.setRequestHeader('Authorization','bearer 6ce64984e6dd9186b2146108d1947c52ff1ab313')

xhr.send();