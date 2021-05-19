// when user add a note to local storage
shownotes();
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
   let addtext=document.getElementById("addtext");
   let notes=localStorage.getItem("notes");
   if(notes==null)
   {
       notesObj=[];
   }
   else{
       notesObj=JSON.parse(notes);
   }
   notesObj.push(addtext.value);
   localStorage.setItem("notes",JSON.stringify(notesObj));
   addtext.value="";
   shownotes();

});
function shownotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    notesObj=[];
    else
    notesObj=JSON.parse(notes);
    let html="";
    notesObj.forEach(function(element,index){
        html+=`<div class="notecard my-3 mx-8" style="width: 18rem; height:30 rem;">
           
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text"> ${element}</p>
            <button class="btn btn-primary" id="${index}" onclick="deletenotes(this.id)">Delete Note</button>
        </div>
    </div>`;
    });
    let noteselem=document.getElementById("notes");
    if (notesObj.length != 0) {
        noteselem.innerHTML = html;
      } else {
        noteselem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}
function deletenotes(index)
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    notesObj=[];
    else
    notesObj=JSON.parse(notes); 
  notesObj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  shownotes();
}
let searchtxt=document.getElementById("searchtxt");
searchtxt.addEventListener("input",function(e)
{
let input=searchtxt.value;
let notecards=document.getElementsByClassName('notecard');
Array.from(notecards).forEach(function(element)
{
    let cardtxt=element.getElementsByClassName("card-text")[0].innerText;
    if(cardtxt.includes(input)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
})
})
var k="a";
function show()
{
var k="komal";
   
}
show();

console.log(k);