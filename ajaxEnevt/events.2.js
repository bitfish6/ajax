var xhr = new XMLHttpRequest();

xhr.onloadstart = res => {
    console.log('onloadstart')
    console.log(res.target.status)
    console.log(`Loaded ${res.loaded} bytes`)
}

xhr.onprogress = res => {
    console.log('onprogress')
    console.log(`Loaded ${res.loaded} bytes`)
    console.log(res.target.responseText)
}

xhr.onload = res => {
    console.log('onload')
    console.log(`Loaded ${res.loaded} bytes`)
}

xhr.onloadend = res => {
    console.log('onloadend')
    console.log(`Loaded ${res.loaded} bytes`)
}

xhr.onreadystatechange = res => {
    console.log(xhr.readyState)
    // console.log(`Loaded ${res.loaded} bytes`)
}
console.log(xhr.readyState)
/*
1   
onloadstart
2
3
onprogress
4
onload
onloadend 
*/
// unsent, opened, headers received, loading, and done
// unsent 最开始的默认值
// headers received  headers一般单独占据一个TCP报文，收到它的时候
// body 可能占据很多TCP报文
// 一般不会超过1500 bytes
// 就好像把一百吨水泥运到目的地
// 先开一辆小轿车，告知运货了
// 然后可能要很多车，整个运输就想HTTP，一辆车就想TCP报文

xhr.open('GET', 'https://api.github.com/repos/bitfishxyz/ajax/issues/2');
xhr.send();