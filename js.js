function Validation(){
    let form = document.querySelector("#form");
    let email= document.querySelector("#email").value;
    console.log(email);
    let emaill= document.querySelector("#email");
    let text = document.querySelector("#text");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   
    let submit = document.querySelector(".button");
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
    })
    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        emaill.style.backgroundColor="#fff";
        emaill.style.color="#888";
        emaill.style.borderColor="#888";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = " Valid email required"
        emaill.style.backgroundColor="rgba(255,232,230)";
        emaill.style.color="#ef5350";
        emaill.style.borderColor="#ef5350";


    }
    if(email==""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML="";
    }
}


function submit(){
    console.log("click");
 if(form.classList.contains("valid")){ 
    document.querySelector("#containerr").classList.add("disable");
    // let conter = document.querySelector("#containerr").style.display = "none";
    document.querySelector("#containerrr").classList.add("active");
    // let conter2 = document.querySelector("#containerrr").style.display="flex"
 }}

