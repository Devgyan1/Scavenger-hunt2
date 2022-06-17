function check(){
    code=document.getElementById("code").value;
    if(code=="19748205"){
        window.location="hint2.html"
    }
    else{
        window.alert ("nope no no no no nope WRONG");
    }
}
function hint(){
        window.location="help.html"
}

function back(){
    window.location="hint2.html"
}

$(document).bind("contextmenu",function(e) {
    e.preventDefault();
   });
   
   $(document).keydown(function(e){
       if(e.which === 123){
          return false;
       }
   });