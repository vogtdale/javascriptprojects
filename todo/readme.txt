var button = document.getElementById('add');

function newItem() {
  var item = document.getElementById("input").value;
  var liParent = document.getElementsByClassName('li');
  var buttonDivparent1 = document.getElementsByClassName('remove');
  var buttonDivparent2 = document.getElementsByClassName('complete');
  var spanParent = document.getElementsByClassName('glyphicon glyphicon-trash');


  /*creates a new <li> element*/
  var li = document.createElement("li");
  li.className = "li"

  var div = document.createElement("DIV");
  div.className = "buttons";

  var buttonDiv1 = document.createElement("Button");
  buttonDiv1.className = "remove";
  buttonDiv1.addEventListener("click", function(event){
    li.parentNode.removeChild(li);
  })
  var buttonDiv2 = document.createElement("Button");
  buttonDiv2.className = "complete";
  buttonDiv2.addEventListener("click", function(event){
    li.style.textDecoration = 'line-through';
    buttonDiv2.classList.toggle(".glyphicon-ok-sign.complete");
  })

  var span1 = document.createElement("SPAN");
  span1.className="glyphicon glyphicon-trash"

  var span2 = document.createElement("SPAN");
  span2.className="glyphicon glyphicon-ok-sign"

  /*creates a text node*/
  var addItems = document.createTextNode(item);
  var divItems = document.createTextNode(li);
  
  var buttonItems1 = document.createTextNode(buttonDivparent1);
  var buttonItems2 = document.createTextNode(buttonDivparent2);

  var spanItems = [span1,span2];
  
  
  /*append the text node to the parent element or existing element*/
  li.appendChild(addItems);
  li.appendChild(div);
  div.appendChild(buttonDiv1);
  div.appendChild(buttonDiv2);
  buttonDiv1.appendChild(span1);
  buttonDiv2.appendChild(span2);
  

  

  /*append the new element to an existing element*/
  var ul = document.getElementById("list");
  ul.appendChild(li);
  li.appendChild(div);
 
}

button.addEventListener("click", function(event){
	newItem();
});

function remove() {

}

