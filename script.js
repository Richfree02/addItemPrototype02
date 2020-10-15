
console.log("I still suck D: ");
/*
//button programing
var getThat = document.getElementsByClassName('button');



//creates a new li element
function addLi(name){
  var li = document.createElement('li');
  li.textContent = name;
  return li;
}

//creates a new checkbox
function addCheckBox(){
  var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = '1';
      checkbox.name = 'whatever';
}

//makes the button work
for (var i = 0; i < getThat.length; i++){
  var button = getThat[i];
  button.addEventListener('click', function(){
    document.getElementById('prototypeButton').value = 'Submit';
    var list = document.getElementById('addMoreLi');
    list.appendChild(addLi(document.getElementById('textField').value));

    li.appendChild(checkbox);
  }) 
}
*/

/*
for(var i; i < getRemBtn.length; i++){
  var rButton = getRemBtn[i];
  rButton.addEvenListener('click', function(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
  })
}
*/

var getRemBtn = document.getElementsByClassName('removalButton');
for(var i; i < getRemBtn.length; i++){
  rButton = getRemBtn.length[i];
  rButton.addEventListener('click', function(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
  })
}

function addItem(){
  var ul = document.getElementById('addMoreLi');
  var li = document.createElement('li');

  var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = '1';
      checkbox.name = 'name';
  
  var remBtn = document.createElement('input');
      remBtn.type = 'button';
      remBtn.value = 'REMOVE';
      remBtn.name = 'name';
      remBtn.className = 'removalButton';

  li.appendChild(remBtn);

  li.appendChild(checkbox);

  var text = document.getElementById('textField');
  li.appendChild(document.createTextNode(text.value));
  ul.appendChild(li);
}

var btn = document.getElementById('prototypeButton');
btn.onclick = addItem;

