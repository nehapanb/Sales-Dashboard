function signup(){
    let name1 = document.querySelector("#username").value;
    let email1 = document.querySelector("#email").value;
    let password1 = document.querySelector("#password").value;
    if(name1 ==="")
    {
       window.alert("please enter your Name")
        return false;
    }
    else if(email1 === "")
    {
       window.alert("please enter email")
       return false;

    }
    else if(!(email1.includes('@') && email1.includes('.com')))
    {
       window.alert("please enter valid email")
       return false;
    }
    else if(password1 === "")
    {
       window.alert("please enter Password")
       return false;
    }
}