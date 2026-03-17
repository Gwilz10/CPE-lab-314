function changeTitle() {
    document.getElementById("title").innerHTML = "New Title!"
}

function makeBlue(){
    document.getElementById("colorPara").style.color = "blue"
}

function makeBlack(){
    document.getElementById("colorPara").style.color = "black"
}
function addListItem(){
    let ul = document.getElementById("myList")
    if (ul) {
        let li = document.createElement("li")
        li.textContent = "New item " + (ul.children.length + 1)
        ul.appendChild(li)
    } else {
        console.error("Could not find myList element")
    }
}

function toggleVisibility(){
    let element = document.querySelector(".toggle-me")
    if (element.style.display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}

function displayInput() {
    let input = document.getElementById("userInput").value
    document.getElementById("outputDiv").innerHTML = "You typed: " + input
}

function tryNonExistent(){
    let errorDiv = document.getElementById("errorLog")
    try {
        let element = document.getElementById("doesNotExist")
        element.innerHTML = "This will fail"
        errorDiv.innerHTML = "Success? (This won't show)"
    } catch (error) {
        errorDiv.innerHTML = "Error: " + error.message
        console.log("Error caught:" + error.message)
    }
}