var xhr = new XMLHttpRequest();

xhr.onload = res => {
    var issues = JSON.parse(res.target.responseText)
    console.log(issues)
    var innerHTML = ''
    for(var issue of issues){
        var panelHTML = `<a href="./article.html?${issue.number}" class="list-group-item">
            <img src="https://avatars0.githubusercontent.com/u/${issue.user.id}?v=4"
            class="responsive" >${issue.title}</a>`
        innerHTML = innerHTML + panelHTML
    }
    document.getElementById('blogsbody').innerHTML = innerHTML
}
xhr.open('GET', `https://api.github.com/repos/${localStorage.repoOwner}/${localStorage.repoName}/issues`);
xhr.setRequestHeader('Authorization','bearer ' + localStorage.token)
xhr.send();