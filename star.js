function start(){
        window.location="start.html";
}
function back(){
    window.location="hint1.html";
}
$(document).bind("contextmenu",function(e) {
    e.preventDefault();
   });
   
   $(document).keydown(function(e){
       if(e.which === 123){
          return false;
       }
   });