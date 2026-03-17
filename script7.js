const hoverBox = document.getElementById('hover-box')

hoverBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#e74c3c'
    this.textContent = "Mouse is over me!"
    console.log('Mouseover event triggered')
})

hoverBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#3498db'
    this.textContent = "Hover over me!"
    console.log('Mouseover event triggered')
})

let counter = 0
const counterValue = document.getElementById('counter-value')
const incrementBtn = document.getElementById('increment-btn')
const decrementBtn = document.getElementById('decrement-btn')
const resetBtn = document.getElementById('reset-btn')

function updateCounter(){
    counterValue.textContent = counter
}
incrementBtn.addEventListener('click', function(){
    counter++;
    updateCounter()
    console.log('Counter incremented to:', counter)
})
decrementBtn.addEventListener('click', function(){
    counter--;
    updateCounter()
    console.log('Counter decremented to:', counter)
})
resetBtn.addEventListener('click', function(){
    counter = 0
    updateCounter()
    console.log('Counter reset to:', counter)
})


const emailForm = document.getElementById('email-form')
const emailInput = document.getElementById('email-input')
const emailError = document.getElementById('email-error')
emailForm.addEventListener('submit', function(event){
    event.preventDefault()
    const email = emailInput.value

    if (email.includes('@')) {
        emailError.textContent = '✔ Valid email!'
        emailError.className = 'success'
        console.log('valid email submitted:', email)
    } else {
        emailError.textContent = '❌ Email must contain @ symbol'
        emailError.className = 'error'
        console.log('Invalid email attempted:', email)
    }
})
emailInput.addEventListener('input', function(){
    emailError.textContent = ''
})


const startTimerBtn = document.getElementById('start-timer')
const timerText = document.getElementById('timer-text')
let timerId = null
startTimerBtn.addEventListener('click', function  (){
    
if(timerId){
    clearTimeout(timerId)
} 

timerText.textContent = 'Timer started .... 5 seconds remaining'
timerText.style.color = '#007bff'

timerId = setTimeout(function(){
    timerText.textContent = "✔ 5 seconds have passed! Text changed!"
    timerText.style.color = '#28a745'
    console.log('Timer completed after 5 seconds')
}, 5000)
})


const preventLink = document.getElementById('prevent-link')
const linkMessage = document.getElementById('link-message')

preventLink.addEventListener('click', function(event){
    event.preventDefault()
    linkMessage.textContent = '✔ Link click prevented! Default behaviour stopped.'
    console.log('Default link behaviour prevented')

    setTimeout(function(){
        linkMessage.textContent = ''
    }, 3000)
})

document.getElementById('email-input').addEventListener('keyup', function(event){
    console.log('Key pressed in email field: ' + event.key)
})

