
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /[A-Za-z0-9]@gmail.com/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}


const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let posX = 0
let posY = 0
let maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
let maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight
let moveRight = maxParentWidth
let moveTop = maxParentHeight



const moveBlock = () => {
    if (posX < maxParentWidth) {
        posX++
        childBlock.style.left = `${posX}px`
        requestAnimationFrame(moveBlock)

    }else if (posX >= maxParentWidth && posY < maxParentHeight) {
        posY++
        childBlock.style.top = `${posY}px`
        requestAnimationFrame(moveBlock)

    }else if (posY >= maxParentHeight && moveRight > 0) {
        moveRight--
        childBlock.style.left = `${moveRight}px`
        requestAnimationFrame(moveBlock)

    }else if (moveRight <=  0 && moveTop > 0) {
        moveTop--
        childBlock.style.top = `${moveTop}px`
        requestAnimationFrame(moveBlock)

    }else if (moveTop <= 0) {
        posX = 0
        posY = 0
        moveRight = maxParentWidth
        moveTop = maxParentHeight
        moveBlock()
    }
}
moveBlock()


const seconds = document.querySelector('#seconds')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector( '#reset')
let nullValue=0
let timer
const buttonAction= ()=> {
    start.addEventListener('click', () => {
        timer=setInterval(() => {
            nullValue++
            seconds.innerHTML=nullValue
            start.disabled=true
        }, 1000)

    })
    stop.addEventListener('click',  () => {
        clearInterval(timer)
        start.disabled=false
    })
    reset.addEventListener('click', () => {
        nullValue=0
        seconds.innerHTML=nullValue
        start.disabled=false
    })
}
buttonAction()



// dz 4.1

const people = document.getElementById('people');
const persons = new XMLHttpRequest();
persons.open("GET", "../data/persons.json");
persons.setRequestHeader("Content-type", "application/json");
persons.onload = () => {
    const data = JSON.parse(persons.responseText);
    data.map(person => {
        const card = document.createElement('div');
        card.classList.add('person_card');
        card.innerHTML = `
         <h5>${person.name}</h5>
         <img src="${person.photo}" alt="${person.name}" class="person_photo">
         <p>Age: ${person.age}</p>
       `;
        people.appendChild(card);
    });
};

persons.send();


// dz 4.2

const request = new XMLHttpRequest()
// request.open('GET','../data/any.json')
// request.setRequestHeader('Content-type', 'application/json')
request.send()

console.log(request)

onload = () => {

    let data = JSON.parse(request.responseText);

    console.log(data);
}