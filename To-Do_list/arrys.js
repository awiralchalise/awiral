let todo = [];
let todovalue='';
let tododate = '';
let todoobj = '';
const addtodo = () => {
   todovalue = document.querySelector('.js-text').value;
   tododate = document.querySelector('.js-date').value;
   if (todovalue === '' || tododate == '' ) {
    document.querySelector('.errors').innerHTML=`Error, please fill the required field`
   } else {
    document.querySelector('.errors').innerHTML='';
    todoobj = {todovalue,
        tododate};
        todo.push(todoobj);
   }
   
}
const rendertodo = () =>{
    html = '';
    document.querySelector('.duedate').innerHTML=`<p>Todo</p><p>Duedate</p>`;
    for (let i = 0; i < todo.length; i++) {
    let j = i+1;
      let todoarr = todo[i];
      html += `<p>${j}. ${todoarr.todovalue}</p> <p>${todoarr.tododate}</p><button onclick="todo.splice(${i},1); rendertodo();" class="delete">Delete</button>`;
    }
    document.querySelector('.js-display').innerHTML = html;
}