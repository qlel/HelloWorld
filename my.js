window.onload=function(){
    var door=document.getElementById("door");
    var times=0;
    door.onclick=function(){
        if(times%2==0){
            change();
        }else{
            change1();
        }
        times++;
    }
}

function change(){
    var door=document.getElementById("door");
    var left=document.getElementsByClassName('left-sidebar');
    var frame=document.getElementsByClassName('frame');
    door.innerHTML="return";
    // door.style.cssText='transform:scale(0.3) translateX(-2010px) translateY(-840px);';
    door.style.cssText='transform:scale(0.3);left:-1200px;top:-500px;';
    left[0].style.left=0+'px';
    frame[0].style.cssText='opacity:1;';
}
function change1(){
    var door=document.getElementById("door");
    var left=document.getElementsByClassName('left-sidebar');    
    var frame=document.getElementsByClassName('frame');    
    door.innerHTML='Welcome';
    door.style.cssText='transfrom:scale(1);left:0px;top:0px;';
    left[0].style.left=(-165)+'px'; 
    frame[0].style.cssText='opacity:0;';   
}
