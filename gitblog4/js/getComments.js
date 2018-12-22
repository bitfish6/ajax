var issueNumber = window.location.search.substr(1)

var xhr = new XMLHttpRequest();

xhr.onload = res => {
    var comments = JSON.parse(res.target.responseText)
    var innerHTML = ''
    for(var comment of comments){
        innerHTML = innerHTML + `<li class="list-group-item">
          <img src="https://avatars0.githubusercontent.com/u/${comment.user.id}?v=4"
          style="margin-right:0.8rem">
          <span>${comment.user.login}:</span>
          ${comment.body}</li>`
    }
    document.getElementById('comments').innerHTML = innerHTML
}
xhr.open('GET', `https://api.github.com/repos/bitfishxyz/ajax/issues/${issueNumber}/comments`);
xhr.setRequestHeader('Authorization','bearer ' + localStorage.token)
xhr.send();