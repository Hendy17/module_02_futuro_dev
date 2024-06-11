document.querySelector('button').addEventListener('click', newElement);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Você deve escrever algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  li.addEventListener('click', function() {
    this.style.textDecoration = this.style.textDecoration === 'line-through' ? '' : 'line-through';
  });
}
