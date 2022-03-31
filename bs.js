document.getElementById('main-form').addEventListener("submit", checkForm)

function checkForm(event) {
    event.preventDefault();
    var elemant = document.getElementById('main-form')
var proger  = ["Anna","Vlad","Azamat"]
   // var name = elemant.name.value;
   var proger = elemant.proger.value
    
   
console.log(proger);
   
}

let str=document.getElementById('a').textContent
regex = /\d/gi;
let num = str.match(regex).join('')
console.log(num);
