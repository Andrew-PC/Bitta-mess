myFunction = function() {
   var table = document.getElementById("myTable");
   var rows = table.rows;

   for (var j = 1; j < rows.length; j++) {
     var cells = rows[j].cells;
     var sum = 0;
     var num = 0;
     for (var y = 2; y < (cells.length -1); y++) {
       var cell = cells[y];
       var addme = parseInt(cell.innerHTML);
       if(!isNaN(addme)) {       
          sum += addme;
          num++;
       }
     }
     var average = sum / num;
     rows[j].cells[cells.length-1].innerHTML = "<td>" + Math.round(average) + "%" + "</td>";
     if(average < 40 || isNaN(average)){
     rows[j].cells[cells.length-1].style.backgroundColor = "red" 
     rows[j].cells[cells.length-1].style.color = "white" 
     }
     else{
     rows[j].cells[cells.length-1].style.backgroundColor = "white" 
     rows[j].cells[cells.length-1].style.color = "black" 
     
     }
     for(y = 2; y< cells.length-1; y++){
       if(parseFloat(cells[y].textContent || cells[y].innerText)>=0){
               cells[y].style.backgroundColor="white";
           }
           else
           {
           cells[y].style.backgroundColor="yellow";
           }
     }
     
   }
 }

document.getElementById('myFunction').onclick = myFunction;


addPerson = function() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(2);
    var length = table.rows[0].cells.length;
    for(var k = 0; k<length; k++){
    var x = row.insertCell(k);
    if (k == 0){
    x.setAttribute("class", "cool"); 
    x.innerHTML = "-";
    x.setAttribute("contenteditable", "true");
    }
    else{
    x.setAttribute("class", "cool");
    x.innerHTML = "-";
    x.setAttribute("contenteditable", "true");
    }
}
}


var Assignment = 1;
addAssignment = function() {
     Assignment++;
    var table = document.getElementById("myTable");
    var row = table.rows;
    var length = table.rows[0].cells.length-1;
    for(var i = 0; i<row.length; i++){
    var z = row[i].insertCell(length);
   
   if(i == 0){
    z.setAttribute("class", "random"); 
    z.innerHTML = "Assignment " + Assignment;
    z.setAttribute("contenteditable", "false");
   }
   else{
   z.setAttribute("class", "cool"); 
   z.innerHTML = "-";
   z.setAttribute("contenteditable", "true");
}
}
}
tableToArray = function(table) {
    
var myTable = document.getElementById("myTable");
var current, cell;
for (var i = 0; (current = myTable.rows[i]); i++)
{
  for (var j = 0; (cell = current.cells[j]); j++)
  {
    //do your cell thing here.
  }
  
}
}


function highlight(){
 var table = document.getElementById('myTable');
 for (var i=0;i < table.rows.length;i++){
  table.rows[i].onclick= function () {
   if(!this.hilite){
    unhighlight();
    this.origColor=this.style.backgroundColor;
    this.style.backgroundColor='red';
    this.hilite = true;
   }
   else{
    this.style.backgroundColor=this.origColor;
    this.hilite = false;
   }
   }
  }
}

function unhighlight(){
 var table = document.getElementById('myTable');
 for (var i=0;i < table.rows.length;i++){
   var row = table.rows[i];
   row.style.backgroundColor=this.origColor;
   row.hilite = false;
 }
}
