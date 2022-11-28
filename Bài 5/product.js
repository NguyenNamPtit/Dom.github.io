const localProduct = localStorage.getItem("products");
const products = JSON.parse(localProduct);

const productList = document.getElementById("product-list")

const productss = (array) => array.map((product)=>
    `
    <li>
      <div >
      <img src="${product.img}">
        <div class="list-product">
            <p>${product.name}</p>
            <p><a>Giá:</a>${product.price}</p>
            <button>Mua</button>
            <button onclick="handleDelete(${product.id})">Xoa</button>
     </div>
     </div>
    </li>
    `
).join("")

const handleDelete = (e) => {
  if(confirm("Ban co chac muon xoa ?")){
    const index = products.findIndex((pr)=>pr.id === ("id"+ e));
    products.splice(index, 1);
    // localStorage.setItem("products", JSON.stringify(products));
    productList.innerHTML = "";
    productList.innerHTML = productss(products);
  }
}

productList.innerHTML = productss(products);