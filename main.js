var fs= document.getElementById("fs");
fs.addEventListener("click",()=>{
    var h= document.getElementById("h");
    h.innerText="new account";

})

 function send(event){
     event.preventDefault();
    var name =document.getElementById("name");
    document.body.style="opacity:0.6;";
    document.body.style="  background: #90caf9 url(https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg);background-position:center;background-size: cover;background-repeat: no-repeat; background-attachment: fixed; background-clip: content-box;"
    document.body.innerHTML=`<div class="modal">
    <p id="ex">x</p>
    <div id="m1">
    <h2>hello<span> ${name.value}</span></h2>
    <p>thanks for signing in :)
    </p>
    </div>
    </div>
    `
   
    var ex= document.getElementById("ex").addEventListener("click",()=>{
        document.body.remove(".modal")
    })
      
       
 }
