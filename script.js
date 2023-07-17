const inputBox=document.getElementById("input-box");
const listtConatiner=document.getElementById("list-container");
function addTask(){
    if (inputBox.value==='') {
        alert("Please add your task ");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listtConatiner.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value="";
    SaveData();
}
listtConatiner.addEventListener("click",function(e){
if (e.target.tagName==="LI") {
   e.target.classList.toggle("checked")
   SaveData();
}
else if (e.target.tagName==="SPAN") {
    e.target.parentElement.remove();
    SaveData();
}
},false);
function SaveData() {
    localStorage.setItem("data",listtConatiner.innerHTML);
    
}
function showTask() {
    listtConatiner.innerHTML=localStorage.getItem("data");
    
}
showTask();


