//store the products array in localstorage as "data"
function Product(){
    this.product_brand="b";
    this.product_name="n";
    this.product_price="p";
    this.product_image="i";
} 

function storedata(e){
    e.preventDefault();
    let form=document.getElementById("product_form");
    let product_brand=form.product_brand.value;
    let product_name=form.product_name.value;
    let product_price=form.product_price.value;
    let product_image=form.product_image;

    let S1=new Product(product_brand,product_name,product_price,product_image);
    let data=JSON.parse(localStorage.getItem("products"))||[];
    data.push(S1);
    localStorage.setItem("products",JSON.stringify(data));
    console.log(S1);
}

function addproduct(){
    let data=JSON.parse(localStorage.getItem("products"))||[];

//   let obj={};
//   for(var i=0; i<data.length; i++){
//     if(!obj[data[i]])
//   }
}