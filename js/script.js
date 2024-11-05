
var nameInput = document.getElementById('name');
var urlInput = document.getElementById('url');
var bookMarks =[ ];
if(localStorage.getItem("bookMarks") != null){
  bookMarks = JSON.parse(localStorage.getItem("bookMarks"))
  displayData(bookMarks)
}


function addBookmark() {
  var bookMarker = {
    name: nameInput.value,
    url: urlInput.value,
  }
  bookMarks.push(bookMarker);
  localStorage.setItem("bookMarks",JSON.stringify(bookMarks))
  displayData(bookMarks)
  clear()
  console.log( bookMarks);

}


function displayData(book){
  var cartona ="";
  for (i=0;i<book.length;i++) {
    cartona += `<tr>
                <th scope="row">${i+1}</th>
                <td> ${book[i].name}</td>
                <td> <a><button class="btn  btn-secondary me-md-2" type="button">visit</button></a></td>
               <td> <button onclick="deleteMark(${i})" class="btn btn-danger me-md-2" type="button">Delete</button></td>
              </tr>
    `
  }
          document.getElementById('tableBody').innerHTML=cartona

}


function clear(){
  nameInput.value= null;
  urlInput.value= null;
}

function  deleteMark(index){
  bookMarks.splice(index,1);
  localStorage.setItem( "bookMarks" ,JSON.stringify(bookMarks))
  displayData(bookMarks)
}




