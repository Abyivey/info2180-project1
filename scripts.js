var subscribe =function(){

    let email = document.getElementById("email");
    document.getElementsByClassName("btn")[1].onclick=function(e){
         let info = email.value;
         if (info == "") {
             document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address.";
         } 
         else {
             document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address " +info + " has been added to our mailing list!";
         }
         e.preventDefault();
     }
 }
 
 window.onload=subscribe;