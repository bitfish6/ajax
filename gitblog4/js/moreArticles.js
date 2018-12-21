var moreBtn = document.getElementById('more')
moreBtn.onclick = (erevt) => {
    xhr.onload = res => {
        var issues = JSON.parse(res.target.responseText)
        console.log(issues)
        var innerHTML = ''
        for(var issue of issues){
            var panelHTML = `<a href="#" class="list-group-item">
                <img src="https://avatars0.githubusercontent.com/u/${issue.user.id}?v=4"
                class="responsive" >${issue.title}</a>`
            innerHTML = innerHTML + panelHTML
        }
        localStorage.lastIssue = issues[issues.length-1].updated_at
        document.getElementById('blogsbody').innerHTML = document.getElementById('blogsbody').innerHTML + innerHTML
    }
    xhr.open('GET', `https://api.github.com/repos/vuejs/vue/issues?sort=updated&since=${localStorage.lastIssue}`);
    xhr.setRequestHeader('Authorization','bearer e6f5fa6e93f068da39a64ab016720b6e42164217')
    xhr.send();
}