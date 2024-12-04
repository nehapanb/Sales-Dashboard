const themeToggler = document.querySelector('.theme-toggler');
const themeSpans = themeToggler.querySelectorAll('span');
const aside = document.querySelector('aside');
const closeBtn = document.getElementById('close_btn');
const menuBar = document.querySelector('.menu_bar');

themeToggler.addEventListener('click', () => {
  themeSpans.forEach(span => span.classList.toggle('active'));

  document.body.classList.toggle('dark-theme');
});

menuBar.addEventListener('click', () => {
  aside.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  aside.style.display = 'none';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    aside.style.display = 'block';
  }
});

const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

loginBtn.addEventListener('click', () => {
    window.location.href = '/login'; 
});

signupBtn.addEventListener('click', () => {
    window.location.href = '/signup';  
});
async function get(){
  let d =  await fetch("http://localhost:3000/product");
  let data = await d.json()
  let finaldata=data.map((t)=>`
   <tr>
    
            <td>${t.pname}</td>
            <td>${t.pnumber}</td>
            <td>${t.payment}</td>
            <td>${t.status}</td>
            <td> <button onclick="mydelete('${t.id}')">DELETE</button>  <button onclick="updateData('${t.id}')">EDIT</button></td>

        </tr>
    `).join("")
    document.querySelector("#viewtable").innerHTML=finaldata
  
}
get()

async function mydelete(id){
  await fetch(`http://localhost:3000/product/${id}`,{
  method:"DELETE",
  headers:{
    "content-type": "application/json"
  }
})
.then(res=>alert("delete successfull ......!!!"))
}

async function updateData(id){
  let data = await fetch(`http://localhost:3000/product/${id}`)
  let newdata = await data.json()
  let selectedData=`
    <input type="text"  value="${newdata.id}" readonly> <br>  
     <input type="text"  id="name1" value="${newdata.pname}"> <br>
   <input type="text"  id="number1" value="${newdata.pnumber}"> <br>
   <input type="text"  id="payment1" value="${newdata.payment}"> <br>
   <input type="text"  id="status1" value="${newdata.status}"> <br>
   <input type="submit" onclick="finalUpDate('${newdata.id}')" id="btn"> <br>
   

    ` 
  let editableSection = document.querySelector("#editable");
  editableSection.innerHTML = selectedData;
  editableSection.style.display = "block";
   }

   function finalUpDate(id){
      let fdata={
          pname:document.querySelector('#name1').value,
          pnumber:document.querySelector('#number1').value,
          payment:document.querySelector('#payment1').value,
          status:document.querySelector('#status1').value,
      }
      fetch(`http://localhost:3000/product/${id}`,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(fdata)
      })
      .then(r=>alert("updatedd....!!!!"))
   }
  
 function submitData(){
    
    let obj={
        "pname":document.querySelector("#name").value ,
       "pnumber":document.querySelector("#num").value ,
       "payment": document.querySelector("#payment").value,
       "status": document.querySelector("#status1").value,
    }
    fetch("http://localhost:3000/product",{
    method:'POST',
    headers:{
       
        'content-type':'application/json'
    },
    
    body:JSON.stringify(obj)
})
.then(res=>alert("inserted...!!!!!!"))
}
  

