document.addEventListener("DOMContentLoaded", () => {

  const taskField = document.getElementById("new-task-description");
  const taskList = document.querySelector('#tasks');
  taskField.id = "fieldContent";
  

  document.querySelector('form').addEventListener('submit', (e) => {

    if(taskField.value.length >= 1){   //error handling 

    e.preventDefault();

    const newItem = e.target.fieldContent.value;

    const li = document.createElement('li');
    li.innerText = newItem;
    li.setAttribute("class", "userEntry");    
    taskList.append(li);

    // const btn = document.createElement('button');
    // taskList.userEntry.appendChild(btn);

    }else {                     //
      e.preventDefault();       //error handling
      console.log('error');}    //
});

})