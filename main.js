// document.querySelectorAll('.some-class').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })

function getId(id) {
  return document.getElementById(id);
}
var cuteAlertWarning = ()=>{
  cuteAlert({
    type: "warning",
    title: " field is empty ",
    message: "pleas enter your task befor submit ",
    buttonText: "Okay",
    img: ' <span class="icon-warning alert-img"></span>',
  });

}
var cuteAlertSuccess = ()=>{
  cuteAlert({
    type: "success",
    title: "Success Title",
    message: "Task aded",
    buttonText: "Okay",
    img: '<span class="icon-checkmark alert-img"></span>',
  });

}
var creatNewTask=()=>{
  
  const divTask = `
  <div id="Task" class="task">
  <span class="icon-star-full icon"></span>
  <p id="taskParagraph">${inputcontent.value}</p>
 
 <div>     
      <input
 type="checkbox"
 name=""
 id=""
 class="icon-angry2 icon"
 style="width: 0.6em; height: 0.6em"
/>
 
   <span id="trashbin" class="icon-bin2 icon"></span>
 </div>
</div>`;
  const allTask = document.getElementById("allTask");
  allTask.innerHTML += divTask;
  // alert task added
  cuteAlertSuccess();



}
const buttonadd = document.getElementById("buttonadd");

var inputcontent = document.getElementById("input");

buttonadd.addEventListener("click", (event) => {
  if (inputcontent.value === "") {
    // field is empty
    cuteAlertWarning();
 
  } else {
    
    creatNewTask();
  }
  inputcontent.value = "";
});

const input = document.getElementById("input");

input.addEventListener("keypress", (event) => {
  var inputcontent = document.getElementById("input");

  if (event.code == "Enter" && inputcontent.value === "") {
    event.preventDefault();
    // field is empty
    cuteAlert({
      type: "warning",
      title: " field is empty ",
      message: "pleas enter your task befor submit ",
      buttonText: "Okay",
      img: ' <span class="icon-warning alert-img"></span>',
    });
  } else if (event.key === "Enter" && inputcontent.value !== "") {
    event.preventDefault();
    const divTask = `
      <div id="Task" class="task">
      <span class="icon-star-full icon"></span>
      <p id="taskParagraph" >${inputcontent.value}</p>
     
     <div>
       <span class="icon-angry2 icon"></span>
       <span id="trashbin" class="icon-bin2 icon"></span>
     </div>
  </div>`;
    const allTask = document.getElementById("allTask");
    allTask.innerHTML += divTask;
    // alert task added
    cuteAlert({
      type: "success",
      title: "Success Title",
      message: "Task aded",
      buttonText: "Okay",
      img: '<span class="icon-checkmark alert-img"></span>',
    });

    inputcontent.value = "";
  }
  // faire quelque chose
});

const trashbin = getId("trashbin");
const allTask = getId("allTask");
const Task = document.getElementsByClassName("task");

allTask.addEventListener("click", (event) => {
  // remove task when click botton trash
  if (event.target.id === "trashbin") {
    event.target.parentElement.parentElement.remove();
  }

  // angry to heart

  if (event.target.className === "icon-angry2 icon") {
    const heart = document.createElement("span");
    heart.classList.add("icon-heart");
    heart.classList.add("icon");
    event.target.parentElement.append(heart);
    // remove angry face
   
    // barre de task
    const taskParagraph = getId("taskParagraph");
    taskParagraph.style.textDecoration = "line-through";
  }
});

// Click on a close button to hide the current list item
// var trash = document.getElementsByClassName("icon-bin2");
// console.log(trash)
// var i;
// for (i = 0; i < trash.length; i++) {
//   trash[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }}
