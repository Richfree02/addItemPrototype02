
console.log("I no suck anymorr :D");
//button programing
var getThat = document.getElementsByClassName('button');

function addLi(name){
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}

for (var i = 0; i < getThat.length; i++){
  var button = getThat[i];
  button.addEventListener('click', function(){
    document.getElementById('prototypeButton').value = 'Submit';
    var list = document.getElementById('addMoreLi');
    list.appendChild(addLi(document.getElementById('textField').value));
  }) 
};