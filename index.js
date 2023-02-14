let bgContainer = document.getElementById('bgContainer')
let heading = document.getElementById('heading') 

function changeColor(){
    bgContainer.style.backgroundColor = 'orange'
    heading.style.color = 'blue'
}

let clearId = setTimeout(changeColor,4000)