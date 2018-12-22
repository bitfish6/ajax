var submitBtn = document.getElementById('submit')

submitBtn.onclick = () => {
    var xhr = new XMLHttpRequest();
    xhr.onload = res => {
        if(res.target.status == 201){
            alert('sucess')
            var result = JSON.parse(res.target.responseText)
            window.location.href = `./article.html?${result.number}`
        } else {
            alert(res.target.responseText)
        }
    }
    xhr.open('POST', `https://api.github.com/repos/${localStorage.repoOwner}/${localStorage.repoName}/issues`);
    xhr.setRequestHeader('Authorization','bearer ' + localStorage.token)
    var title = document.getElementById('title').value
    var body = document.getElementById('body').value
    xhr.send(JSON.stringify({
        title: title,
        body:body
    }));
}
