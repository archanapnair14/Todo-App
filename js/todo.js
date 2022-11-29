// $('#logOut').on('click',(e)=>{
//     e.preventDefault();
//     window.localStorage.removeItem('user');
//     window.location="index.html";
//     console.log('logout successfully');
// })

// Fetch data.

const api_url = 
       'https://jsonplaceholder.typicode.com/todos/';
  
// Defining async function
async function getList(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    let tablecontent='';
       data.forEach((el,index)=>{
       tablecontent+=`
       <tr class="${el.completed?'disable':''} ${index%2?'list-group-item-secondary':'list-group-item-info'}">
         <td>${el.id}</td>
         <td>${el.title}</td>
         <td><input type="checkbox" class="checkbox" ${el.completed?' checked':''}/></td>
         </tr>`;
        });
        document.getElementById('todoList').innerHTML=tablecontent;
        if(checkedCount){
            checkedCount=0;
        }
}
// Calling that async function
  getList(api_url);

// call getlist() when GET LIST is clicked.
// $('#getList').on('click',(e)=>{
//     e.preventDefault();
//     getList();
// });

//variable to keep track of cheking list items
let checkedCount=0;

const alertPromise= ()=>{
     return new Promise((resolve,reject)=>{

         
        if(checkedCount===5){
            resolve(checkedCount)
        }
        else{
            reject('count not equal to 5');
        }
    });
}

const promiseCall=()=>{
    alertPromise().then((data)=>{
        alert(`Congrats!...  ${data} Tasks have been Successfully Completed`);
    })
    .catch((err)=>{
        console.log('promise rejected');
    })
}


getList();

$('#todoList').on('change','.checkbox',function(e){
    if($(this).prop('checked')===true){
        console.log('checked');
        checkedCount++; 
        $(this).parent().addClass('active');
    }
    else{
        checkedCount--;
        console.log('unchecked');
        $(this).parent().removeClass('active');
    }
    
    promiseCall();


});

