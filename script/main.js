var inputText=document.getElementById("input_field");
var items=document.querySelectorAll("#myTable tr");
var tab=[],index;

for(var i=0;i<items.length;i++)
{
    tab.push(items[i].innerHTML);
}

for(var i=0;i<items.length;i++)
{
    items[i].onclick=function(){
       index=tab.indexOf(this.innerHTML); 
       console.log(this.innerHTML + "INDEX=" + index);
       inputText.value=this.innerHTML;
    };
}
 //Add Task 
function addtask() {
    var input = document.getElementById('input_field').value;
    if (input == "") {
      window.alert("You must enter a value in the New Task field.");
    }
    else {
      document.getElementById("input_field").value = "";
      var noteList = document.getElementById('myTable');
      noteList.innerHTML += "<td>" + 
      input + 
      "<button id='edit' onclick='editItem()'>Edit</button></li>"+
      "<input onclick='clearItem()' type='button' value='Remove' id='delete'></input></li>"+
      "<input onclick='return change(this);' type='button' value='pending' id='done'></input></li>";
      
      var textNode=document.createTextNode(inputText.value);
      var liNode=document.createElement("tr");
      liNode.appendChild(textNode);
      listNode.appendChild(listNode);
  
      liNode.onclick=function(){
          index=tab.indexOf(liNode.innerHTML); 
          console.log(this.innerHTML + "INDEX=" + index);
          inputText.value=this.innerHTML;
       };
  }}
  //Change the status to done
  function change( el )
  {
      if ( el.value === "pending" )
          el.value = "Done";
         

      else
          el.value = "pending";
        
  }

  //Delete Task
  function clearItem() {     
    event.currentTarget.parentElement.remove();
    
    remaining--;  //decrement remaining when user clears an item
    
    document.getElementById('remaining').innerHTML = "Number of tasks remaining = " + remaining;
  }
  function edit(){
    var table=document.getElementById("mytable"),rIndex;
    for(var i=0;i<table.rows.length;i++){
      table.rows[i].onclick=function(){
        rIndex=this.rowIndex;
        console.log(rIndex);
        document.getElementById("input_field").value=this.cells[0].innerHTML;
      }
    }
  }
  //Search and filter tasks
  function searchAndFilter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



  function editItem(){
      items[index].innerHTML=inputText.value;
     
  }

