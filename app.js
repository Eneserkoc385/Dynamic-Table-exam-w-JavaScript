"use strict";

let table = document.getElementById("table"),rIndex;

for(let i = 1; i < table.rows.length; i++) {
  table.rows[i].onclick = function()
  {
    rIndex = this.rowIndex;
    console.log(rIndex);
    
    document.getElementById("sNum").value = this.cells[0].innerHTML;
    document.getElementById("firstName").value = this.cells[1].innerHTML;
    document.getElementById("lastName").value = this.cells[2].innerHTML;
    document.getElementById("country").value = this.cells[3].innerHTML;
    document.getElementById("birth").value = this.cells[4].innerHTML;
  };
}

//click update row and show edit row inputs and button

function editTable() 
{
  document.querySelector(".updateTable").classList.add("show")
}

//table add row

function addTableRow() {
  let sıraNo = document.getElementById("sNum")
  let name = document.getElementById("firstName");
  let surname = document.getElementById("lastName");
  let country = document.getElementById("country");
  let birth = document.getElementById("birth");

  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  
  row.insertCell(0).innerHTML = sıraNo.value;
  row.insertCell(1).innerHTML = name.value;
  row.insertCell(2).innerHTML = surname.value;
  row.insertCell(3).innerHTML = country.value;
  row.insertCell(4).innerHTML = birth.value;

  //rowCount bize eklenen değerleri number olarak gönderiyor.DML (Data Manipulation Language – select,insert,update,delete)işleminden etkilenen satirlarin toplam sayısını döndürür.

  //insertRow tabloya yeni satırlar ekleyen kod.Yeni "tr" eklemesi yapar.
  //insertCell ise tr içerisine yeni th'ler ekler.

  addTableRow.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  });
 }

 //edit rable row

function editRow()
{
table.rows[rIndex].cells[0].innerHTML = document.getElementById("sNum").value;
table.rows[rIndex].cells[1].innerHTML = document.getElementById("firstName").value;
table.rows[rIndex].cells[2].innerHTML = document.getElementById("lastName").value;
table.rows[rIndex].cells[3].innerHTML = document.getElementById("country").value;
table.rows[rIndex].cells[4].innerHTML = document.getElementById("birth").value;
}

//  var input = document.getElementById("myInput");
 
//  input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("myBtn").click();
//   }
// });



