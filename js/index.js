var inputNameInpute = document.getElementById("BookMarkName");
var inputEmailInpute = document.getElementById("SiteUrl");
let boxMassagem =document.getElementById("boxMassage");

var bookList = [];

if( localStorage.getItem("productContainer") !==null ){
    bookList =JSON.parse(localStorage.getItem("productContainer"));
    dispLayData()
}
function addBook(){
if(validationName() && validationUrl()){
   let book ={
        name: inputNameInpute.value,
        email: inputEmailInpute.value,
     }
    
     bookList.push(book)
     localStorage.setItem("productContainer", JSON.stringify(bookList));
     dispLayData();
     console.log(bookList);
     clearForm();
}
else{
    boxMassagem.classList.remove("d-none")
}

};
function clearForm(){
    inputNameInpute.value= null;
    inputEmailInpute.value = null;
};

function dispLayData(){
    var cartona = "";
    for(var i = 0 ; i < bookList.length ; i++){
        cartona+=`
            <tr class=" border-bottom">
                    <td > ${i+1}</td>
                    <td>${bookList[i].name}</td>
                    <td class="py-2">
                        <a class="btn btn-visit" data-index="0" href="${bookList[i].email}"  >
                           <i class="fa-solid fa-eye pe-2"></i>Visit
                        </a>
                    </td>
                    <td>
                        <button class="btn btn-delete pe-2" onclick="deleteData(${i})" data-index="0">
                            <i class="fa-solid fa-trash"></i>
                               Delete
                           </button>
                    </td>
             </tr>      

        `
    };
    document.getElementById("table").innerHTML=cartona;


}
function deleteData(index){
    bookList.splice(index,1);
    localStorage.setItem("productContainer", JSON.stringify(bookList));
    dispLayData();
};


function validationName(){
    let text =inputNameInpute.value;
    let regex = /^[a-zA-Z _-]{3,15}$/;


    if(regex.test(text)){
        inputNameInpute.classList.add("is-valid");
        inputNameInpute.classList.remove("is-invalid");
        return true;
    }
    else{
        inputNameInpute.classList.add("is-invalid");
        inputNameInpute.classList.remove("is-valid");
       return false;
    }
}

function validationUrl(){
    let text =inputEmailInpute.value;
    let regex = /^((ftp|http|https):\/\/)?(www.)?(.com)?(?!.(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/;


    if(regex.test(text)){
        inputEmailInpute.classList.add("is-valid");
        inputEmailInpute.classList.remove("is-invalid");
        return true;
    }
    else{
        inputEmailInpute.classList.add("is-invalid");
        inputEmailInpute.classList.remove("is-valid");
       return false;
    }
}

function closeBox(){

        boxMassagem.classList.add("d-none")
    }

    document.addEventListener("click", function (e) {
        if (e.target === boxMassage) {
            closeBox();
        }
    })

