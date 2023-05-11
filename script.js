const view = document.querySelector("#view");


const txt = document.querySelector("#text");
text.addEventListener("keyup",function(event)
{view.innerHTML = event.target.value;}
);