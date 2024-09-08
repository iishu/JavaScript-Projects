const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!"); //if the input box is empty it will give this 
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"; // Adds the close button (×) to the list item
        li.appendChild(span);
    }
    inputBox.value="";  // Clears the input box after adding a task
    saveData(); // Saves the updated list to localStorage
}

listContainer.addEventListener("click",function (e) {
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");  // Toggles the "checked" class for list items
        saveData(); // Save changes (in case the item is checked or unchecked)


    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();  // Removes the list item if the close button is clicked
        saveData();  // Save changes after removing the item
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //this will store the list data in local storage
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");// this will store all the list data in the name of data
}
showTask();