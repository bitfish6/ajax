var submitBtn = document.getElementById('sizing-addon1')
var issueNumber = window.location.search.substr(1)

submitBtn.onclick = () => {
    var xhr = new XMLHttpRequest();
    xhr.onload = res => {
        if(res.target.status == 201){
            var result = JSON.parse(res.target.responseText)
            window.location.href = `./article.html?${issueNumber}`
        }
    }
    
    xhr.open('POST', `https://api.github.com/repos/bitfishxyz/ajax/issues/${issueNumber}/comments`);
    xhr.setRequestHeader('Authorization','bearer ' + localStorage.token)
    var comment = document.getElementById('input').value
    xhr.send(JSON.stringify({
        body:comment
    }));
}