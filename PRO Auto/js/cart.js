const cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");

function addToCart(name, price){

    cart.push({
        name,
        price
    });

    renderCart();

}

function removeItem(index){

    cart.splice(index,1);

    renderCart();

}

function renderCart(){

    cartItems.innerHTML="";

    let total=0;

    cart.forEach((item,index)=>{

        total+=item.price;

        cartItems.innerHTML+=`
            <div class="cart-item">
                <div class="product-info">
                    <img src="../img/catalog/battery-magnum-60ah.jpg" alt="Фото товара" class="product-photo">

                    <div class="product-desc">
                        <div class="product-name">${item.name}</div>
                        <div class="product-in--stock">В НАЛИЧИИ</div>
                    </div>
                </div>

                <div class="product-price">
                    ${item.price} руб.
                </div>

                <div class="remove" onclick="removeItem(${index})">
                    <img src="../img/catalog/remove.svg" alt="Иконка закрытия">
                </div>

            </div>
        `;

    });

    totalPrice.innerHTML=total+" руб.";

    cartCount.innerHTML=cart.length;

    if(cart.length>0){
        cartBtn.classList.add("active");
    }else{
        cartBtn.classList.remove("active");
        cartPopup.classList.remove("open");
    }

}

cartBtn.addEventListener("click",()=>{

    if (cart.length===0) {
        alert('Корзина пустая');
        return;
    };

    cartPopup.classList.toggle("open");

});
