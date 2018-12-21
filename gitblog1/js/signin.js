if(window.location.search === '?onerror'){
    alert('错误或过期的token，请重新获取')
}

var submitBtn = document.getElementById('submit')
submitBtn.onclick = event => {
    var input = document.getElementById('input')
    if(input.value){
        localStorage.token = input.value
        window.location.href = "./index.html"
    }
}