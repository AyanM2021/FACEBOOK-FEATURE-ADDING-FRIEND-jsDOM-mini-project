 let is_status=document.querySelector("h5");
 let btn = document.querySelector("#add");
 let flag=0;

 btn.addEventListener("click",function(){
    if(flag==0){

    is_status.innerHTML="Friends";
    is_status.style.color="green";
    btn.innerHTML="Remove Friend";
    flag=1;

    }
    else{
    is_status.innerHTML="Strangers";
    is_status.style.color="red";
    btn.innerHTML="Add Friend";
    flag=0;
    }
 })