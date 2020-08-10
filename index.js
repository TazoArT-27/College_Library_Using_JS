console.log("This is Library");

//constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type; 
}

//Display Constructor
function Display(){


}

//Add methods to display prototype this is for books
Display.prototype.add = function(book){
    let tableBody = document.getElementById("tableBody");
    let uiString = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
    tableBody.innerHTML += uiString;
}

//Clear methods to display prototype
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

//Validate methods to display prototype
Display.prototype.validate = function(book){
    if(book.name.length<3 || book.author.length<3){
        return false;
    }else{
        return true;
    }
}

//Show message methods to display prototype
Display.prototype.show = function(type, talk){
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong> ${talk}.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}


//Add submit event listener
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", function(element){
    
    //for preventing the page to reload
    element.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if(fiction.checked){
        type = fiction.value;
    }else if(programming.checked){
        type = programming.value;
    }else if(cooking.checked){
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    //calling the methods to add books and clear input section
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', "Your book has been successfully added");
    }else{
        //show the error
        display.show('danger', "Sorry, you cannot add this book!");
    }
    // display.add(book);
    // display.clear();

    
})