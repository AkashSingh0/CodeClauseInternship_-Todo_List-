let TodoList=[
    {item:'Buy Milk',dueDate:'24/11/2023'},
    {item:'Buy Car',dueDate:'23/11/2023'},
    {item:'Buy Bike',dueDate:'22/11/2023'}
];
displayItems();
function addTodo(){
    let inputElement=document.querySelector('#Todo-input');

    let dateElement=document.querySelector('#todo-date');

    let TodoItem=inputElement.value;
    let tododate=dateElement.value;
    TodoList.push({item:TodoItem,dueDate:tododate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){

    let containerElement=document.querySelector('.todo-container');

    let newHtml='';

    for(let i=0;i<TodoList.length;i++){
        let {item,dueDate}=TodoList[i];


        newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="TodoList.splice(${i},1);
        displayItems();">Delete</button>`;
    
    }
    containerElement.innerHTML=newHtml;
}