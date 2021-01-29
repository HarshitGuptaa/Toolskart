let row = document.querySelectorAll(".row");
let data = document.querySelector(".data");



for(let i=0;i<row.length;i++){
    
    row[i].addEventListener("mouseover",function(){
        // console.log(data.classList);
        data.classList.remove("hide");
    })
}

for(let i=0;i<row.length;i++){
    
    row[i].addEventListener("mouseleave",function(){
        // console.log(data.classList);
        data.classList.add("hide");
    })
}
