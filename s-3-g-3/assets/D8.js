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
