function letter(){
    ans=document.getElementById("anagram-ans").value;
    if(ans=="IWILLWIN"){
        window.location="hint3.html";
    }
    else{
        window.alert("The answer "+ans+" is wrong");
    }
}

function hint(){
    window.location="help2.html"
}
$(document).bind("contextmenu",function(e) {
    e.preventDefault();
   });
   
   $(document).keydown(function(e){
       if(e.which === 123){
          return false;
       }
   });