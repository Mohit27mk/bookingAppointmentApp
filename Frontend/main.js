
const myForm=document.querySelector('#my-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const noInput=document.querySelector('#phoneno');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');




// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  const name=e.target.name.value;
  const phoneno=e.target.phoneno.value;
  const email=e.target.email.value;
  

    const myobj={
       name,phoneno,email
    }

    
    
    // let myobjs=JSON.stringify(myobj);
    // localStorage.setItem(emailInput.value,myobjs);
    // const li = document.createElement('li');

    // // Add text node with input values
    // li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    // userList.appendChild(li);
    // var deleteBtn=document.createElement('button');
    // deleteBtn.className='btn btn-danger btn-sm  delete';
    // deleteBtn.appendChild(document.createTextNode('delete'));
    // li.appendChild(deleteBtn);

 //Api call

 axios.post("http://localhost:3000/user/add-user",myobj)
 .then((res)=>{
  console.log(res)
 }).catch((err)=>{
  console.log(err);
 })

 



//     var editBtn=document.createElement('button');
// editBtn.className='btn btn-primary btn-sm  edit';
// editBtn.appendChild(document.createTextNode('edit'));
//     li.appendChild(editBtn);
//     deleteBtn.onclick=()=>{
//         localStorage.removeItem(myobj.Email);
//         userList.removeChild(li);
//     } 
//     editBtn.onclick=()=>{ 
//         localStorage.removeItem(myobj.Email);
//         userList.removeChild(li);
//         nameInput.value = myobj.name;
//     emailInput.value = myobj.Email;
//     } 
    nameInput.value = '';
    emailInput.value = '';
    noInput.value='';
  }


window.addEventListener("DOMContentLoaded",()=>{
  axios.get("http://localhost:3000/user/get-users")
  .then((res)=>{
    console.log(res);
    for(var i=0;i<res.data.allUsers.length;i++){
      showUser(res.data.allUsers[i]);
    }
  }).catch((err)=>{
    console.log(err);
  })
 })

 function showUser(obj){
  const userList = document.querySelector('#users');
  const li = document.createElement('li');
// console.log(obj.id)
  // Add text node with input values
  li.appendChild(document.createTextNode(`${obj.name}: ${obj.email}:${obj.phoneno}`));
  userList.appendChild(li);
  var deleteBtn=document.createElement('button');
  deleteBtn.className='btn btn-danger btn-sm  delete';
  deleteBtn.appendChild(document.createTextNode('delete'));
  li.appendChild(deleteBtn);
  var editBtn=document.createElement('button');
  editBtn.className='btn btn-primary btn-sm  edit';
  editBtn.appendChild(document.createTextNode('edit'));
      li.appendChild(editBtn);
      deleteBtn.onclick=()=>{
        userList.removeChild(li);
       
        axios.delete(`http://localhost:3000/user/delete-user/${obj.id}`)
      } 
    //   editBtn.onclick=()=>{ 
    //     // axios.delete(`https://crudcrud.com/api/844bf6c747e640e09938b3616d765732/appointmentdata/${obj._id}`)
    //     userList.removeChild(li);
    //     nameInput.value = obj.name;
    // emailInput.value = obj.Email;
    // } 
    nameInput.value = '';
    emailInput.value = '';
 }

   

