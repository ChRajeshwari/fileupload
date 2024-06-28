window.addEventListener("load", ()=>{
const input=document.getElementById("upload");
const filewrapper= document.getElementById("filewrapper");



input.addEventListener("change", (event)=> {
    let fileName=event.target.files[0].name;
    let filetype=event.target.value.split(".").pop();
    show(fileName,filetype);

})
   
    const show=(fileName,filetype) =>{
    const showfileboxE1=document.createElement("div");
    showfileboxE1.classList.add("showfilebox");

    const leftE1=document.createElement("div");
    leftE1.classList.add("left");

    const filetypeE1=document.createElement("span");
   filetypeE1.classList.add("filetype");
   filetypeE1.textContent=filetype;
   console.log(filetypeE1);
   leftE1.appendChild(filetypeE1);

   const headE1=document.createElement("h3");
  headE1.textContent=fileName;
  
   leftE1.appendChild(filetypeE1)
   leftE1.appendChild(headE1);

   const rightE1=document.createElement("div");
   rightE1.classList.add("right");

   showfileboxE1.appendChild(leftE1);
   showfileboxE1.appendChild(rightE1);

   const span=document.createElement("span");
   span.innerHTML="&#215";
   rightE1.appendChild(span);
   filewrapper.appendChild(showfileboxE1);


  span.addEventListener("click", () =>{
    filewrapper.removeChild(showfileboxE1);
  })
}
})

