// 1 Задание
const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345"))
console.log(containsOnlyDigits("12a45"))

// 2 Задание
setInterval(() => {
    console.log("Прошла секунда")
}, 1000)

// 3 Задание
const count = () => {
    let i = 1
    const interval = setInterval(() => {
        console.log(i)
        i++
        if (i > 10) {
            clearInterval(interval)
        }
    }, 1000)
}

count()



// 4 Задание
const block = document.getElementById("colorBlock")

block.addEventListener("click", () => {
    block.classList.toggle("colored")
});

const style = document.createElement("style")
style.innerHTML =`
    .colored {
        background-color: yellow;
    }
`
document.head.appendChild(style)
//5 Задание
const xhr = new XMLHttpRequest()
xhr.open("GET", "../data/paskage.json", true)

xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText)
        console.log(data)
    }
}

xhr.send();