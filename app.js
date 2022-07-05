let header = document.querySelector('h1');
let dec = document.querySelector('.dec');
let res = document.querySelector('.res');
let inc = document.querySelector('.inc');

//decrease

// function decrease() {
//     header.textContent--

// }

dec.addEventListener('click', function () {
    header.textContent--
    return (
        document.body.style.backgroundColor = ('red')
    )
})

res.addEventListener('click', function () {
    return header.textContent = 0
})



inc.addEventListener('click', function () {
    header.textContent++
    return (
        document.body.style.backgroundColor = ('green')
    )
})