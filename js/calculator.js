function displayValue(val){
    document.getElementById('display').value = document.getElementById('display').value + val
}

function clrDisplay(){
    document.getElementById('display').value = ""
}

function calulate(){
    var userInput =  document.getElementById('display').value
    var result = eval(userInput)
    document.getElementById('display').value = result
}