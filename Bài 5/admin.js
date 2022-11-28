"use trict"

const formEl = document.querySelector(".list-input");
const nameproductEl = document.querySelector("#name-product");
const nameimgEl = document.querySelector("#name-img");
const priceEL = document.querySelector("#price");
const noteEl = document.querySelector("#note");
const namemessageEl= document.querySelector("#name-product ~ .error-message");
const nameimgmessageEl = document.querySelector("#name-img ~.error-message");
const pricemessageEl = document.querySelector("#price ~.error-message");
const notemessageEl = document.querySelector("#note ~.error-message");

formEl.onsubmit = function(event){
    event.preventDefault();

    const formData = [...new FormData(formEl)];
    const data = Object.fromEntries(formData);
    // console.log(data);
    let formIsValid = true;

    if(nameproductEl.value.trim().length === 0){
        namemessageEl.textContent = "Vui lòng nhập tên sản phẩm";
        formIsValid = false;
    }
    if(nameimgEl.value.trim().length === 0){
        nameimgmessageEl.textContent = "Vui lòng nhập ảnh";
        formIsValid = false;
    }
    if(priceEL.value.trim().length ===0 || !Number(priceEL.value.trim())){
        pricemessageEl.textContent = "Vui lòng nhập giá sản phẩm";
        formIsValid = false;
    }
    if(noteEl.value.trim().length === 0){
        notemessageEl.textContent ="Vui lòng nhập mô tả sản phẩm";
        formIsValid = false;
    }
    if(formIsValid){
        const newId = "id-" + Date.now().toString().slice(-5);
        const newProduct = {id: newId, title:data.title, imageUrl:data.imageUrl, price:data.price,description:data.description}  ;

        if(!localStorage.getItem("products")){
            const productList = [newProduct];
            localStorage.setItem("products",JSON.stringify(productList));
        }else{
            const oldListJson = localStorage.getItem("products");
            const existingList = JSON.parse(oldListJson);
            existingList.push(newProduct);
            localStorage.setItem("products", JSON.stringify(existingList));
        }
        
    }
console.log(localStorage.getItem)
};
nameproductEl.addEventListener("focus", (event) =>{
    event.preventDefault()
    namemessageEl.textContent =""
})
nameimgEl.addEventListener("focus", (event) =>{
    event.preventDefault()
    nameimgmessageEl.textContent =""
})
priceEL.addEventListener("focus" ,(event) =>{
    event.preventDefault()
    pricemessageEl.textContent=""
})
noteEl.addEventListener("focus",(event) =>{
    event.preventDefault()
    notemessageEl.textContent =""
})