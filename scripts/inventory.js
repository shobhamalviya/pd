function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let products_data=document.getElementById("products_data");
    products_data.innerHTML=null;
    data.forEach(function(el,index){
        // console.log(el)
    })
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.product_image;
    let p=document.createElement("p");
    p.innerText=el.product_name;

    let btn=document.createElement("button");
    btn.innerText="remove_product"

    btn.addEventListener("click", function(){
        remove_product(index)
    });
    div.append(img,p,btn);
    products_data.append(div);

}