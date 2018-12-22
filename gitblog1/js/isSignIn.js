localStorage.repoOwner = 'bitfishxyz'
localStorage.repoName = 'ajax'

var token = localStorage.token
if(!token){
    window.location.href = "./signin.html"
}

var xhr = new XMLHttpRequest();

xhr.onload = res => {
    if(res.target.status !== 200){
        window.location.href = "./signin.html?onerror"
    } else {
        var user = JSON.parse(res.target.responseText)
        document.getElementById('name').innerText = localStorage.userName
        
    }
}

xhr.open('GET', 'https://api.github.com/user');
xhr.setRequestHeader('Authorization','bearer ' + token)
xhr.send();

