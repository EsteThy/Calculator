// Function helps show the value on the screen
function dis(val){
    document.querySelector("#result").value +=val
}
// Function delete all
function reset(){
    document.querySelector('#result').value = ""
}
    
// function to solve the math
function solve(){
    document.querySelector('#result').value  = eval(document.querySelector('#result').value)
}
// function to delete a number

function del(){
    document.querySelector('#result').value = document.querySelector('#result').value.slice(0,-1) 
}
