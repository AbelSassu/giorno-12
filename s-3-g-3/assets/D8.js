function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("taskInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
  
    if (inputValue === '') {
      alert("Conviene scrivere qualcosa prima eh");
    } else {
      document.getElementById("miaUl").appendChild(li);
    }
    document.getElementById("taskInput").value = "";
  
    let icon = document.createElement("trash-bin-outline");
    icon.className = "ion-trash-a";
    icon.classList.add("close");
    li.appendChild(icon);
  
    icon.addEventListener("click", function() {
      let div = this.parentElement;
      div.style.display = "none";
    });
  }
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addDecorationAndIcon() {
    const ul = document.querySelector('ul');
    const liElements = document.querySelectorAll('li');
  
    liElements.forEach((li, index) => {
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
          const icon = document.createElement('i');
          icon.classList.add('icon', 'ion-checkmark');
          li.appendChild(icon);
        } else {
          const icon = li.querySelector('.ion-checkmark');
          if (icon) {
            li.removeChild(icon);
          }
        }
      });
    });
  }
  
  addDecorationAndIcon();