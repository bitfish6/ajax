var issueNumber = window.location.search.substr(1)

var xhr = new XMLHttpRequest();

xhr.onload = res => {
    var issue = JSON.parse(res.target.responseText)
    var innerHTML =  `
    <div class="panel-heading">${issue.title}</div>
         <div class="panel-body">
         <p>${issue.body}</p>
    </div>
    <div>
        <img src="${issue.user.avatar_url}"
            style="margin:0.8rem">
        <span>${issue.user.login}</span>
        <span>创建于：${issue.created_at}</span>
    </div>`
    document.getElementById('article').innerHTML = innerHTML
}
xhr.open('GET', `https://api.github.com/repos/${localStorage.repoOwner}/${localStorage.repoName}/issues/${issueNumber}`);
xhr.setRequestHeader('Authorization','bearer ' + localStorage.token)
xhr.send();