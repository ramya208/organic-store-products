
// const buttons = document.querySelectorAll(".AddtoCart");
// const cartbar = document.getElementById("cartbar");
// const cartItems = document.getElementById("cartItems");
// const closeCart = document.getElementById("closeCart");

// let cart = [];
// function updateCartTotal() {

//     let subtotal = 0;

//     document.querySelectorAll(".cart-item").forEach(item => {

//         const total = Number(
//             item.querySelector(".total").innerText
//         );

//         subtotal += total;

//     });

//     document.getElementById("subtotal").innerText = "₹" + subtotal;
//     // document.getElementById("grandTotal").innerText = "₹" + subtotal;
//     document.getElementById("total").innerText = "₹" + subtotal;
// }

// buttons.forEach(button => {

//     button.addEventListener("click", () => {

//         const card = button.parentElement;

//         const image = card.querySelector("img").src;
//         const name = card.querySelector("h3").innerText;
//         const price = card.querySelector("p").innerText;
         

//         // Check if product already exists
//         // if (cart.includes(name)) {
//         //     // alert("Product already added!");
//         //     cartbar.classList.add("active");
//         //     return;
//         // }
//        const alreadyExists = cart.some(product => product.name === name);

// if (alreadyExists) {
//     alert("Product already added!");
//     cartbar.classList.add("active");
//     return;
// }


//         // Save product name
//         // cart.push(name);
//         cart.push({
//     image,
//     name,
//     price: Number(price.replace("₹", ""))
// });
//         localStorage.setItem("cart", JSON.stringify(cart));

//         cartbar.classList.add("active");

//         const item = document.createElement("div");
//         item.classList.add("cart-item");
//         item.innerHTML = `
//     <img src="${image}" width="60">

//     <div class="details">
//         <h4>${name}</h4>
//         <p>₹${price.replace("₹","")}</p>

//         <div class="quantity-box">
//             <button class="minus">-</button>
//             <span class="qty">1</span>
//             <button class="plus">+</button>
//         </div>

       
//         <h4>Total : ₹<span class="total">${price.replace("₹","")}</span></h4>
//      <p class="remove">Remove</p>
//         </div>
// `;
//  const cartIcon = document.querySelector(".ri-shopping-cart-line");
//         cartIcon.addEventListener("click", () => {
//                 displayCart();
//     cartbar.classList.add("active");
// });
// function displayCart() {

//     cartItems.innerHTML = "";

//     cart.forEach(item => {

//         const div = document.createElement("div");

//         div.classList.add("cart-item");

//         div.innerHTML = `
//             <img src="${item.image}" width="60">

//             <div class="details">
//                 <h4>${item.name}</h4>
//                 <p>₹${item.price}</p>
//             </div>
//         `;

//         cartItems.appendChild(div);

//     });

// }const plus = item.querySelector(".plus");
// const minus = item.querySelector(".minus");
// const qty = item.querySelector(".qty");
// const total = item.querySelector(".total");

// let quantity = 1;
// let productPrice = Number(price.replace("₹", ""));

// // plus.addEventListener("click", () => {
// //     quantity++;
// //     qty.innerText = quantity;
// //     total.innerText = quantity * productPrice;
// // });
// plus.addEventListener("click", () => {
//     quantity++;
//     qty.innerText = quantity;
//     total.innerText = quantity * productPrice;

//     updateCartTotal();
// });

// // minus.addEventListener("click", () => {
// //     if (quantity > 1) {
// //         quantity--;
// //         qty.innerText = quantity;
// //         total.innerText = quantity * productPrice;
// //     }
// // });
// minus.addEventListener("click", () => {
//     if (quantity > 1) {
//         quantity--;
//         qty.innerText = quantity;
//         total.innerText = quantity * productPrice;

//         updateCartTotal();
//     }
// });
// const remove = item.querySelector(".remove");

// remove.addEventListener("click", () => {
//     item.remove();

//     // cart array-ல இருந்தும் remove பண்ணு
//     cart = cart.filter(product => product !== name);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartTotal();
// });

//         // item.innerHTML = `
//         //     <img src="${image}" width="60">
//         //     <div>
//         //         <h4>${name}</h4>
//         //         <p>${price}</p>
//         //     </div>
//         // `;

//         cartItems.appendChild(item);
//     //     remove.addEventListener("click", () => {
//     // item.remove();

//     // cart = cart.filter(product => product !== name);

//     updateCartTotal();
// });


//     });

// // });

// closeCart.addEventListener("click", () => {
//     cartbar.classList.remove("active");
// });
// Elements
const buttons = document.querySelectorAll(".AddtoCart");
const cartbar = document.getElementById("cartbar");
const cartItems = document.getElementById("cartItems");
const closeCart = document.getElementById("closeCart");
const cartIcon = document.querySelector(".ri-shopping-cart-line");
const cartCount = document.getElementById("cartCount");

function updateCartCount() {
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// Load Cart from LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save Cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add To Cart
buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".card");

        const image = card.querySelector("img").src;
        const name = card.querySelector("h3").innerText;
        const price = Number(
            card.querySelector("p").innerText.replace("₹", "")
        );

        // Duplicate Check
        const alreadyExists = cart.some(product => product.name === name);

        if (alreadyExists) {
            alert("Product already added!");
            cartbar.classList.add("active");
            return;
        }

        cart.push({
            image,
            name,
            price,
            quantity: 1
        });

        saveCart();

        displayCart();

        updateCartCount();

        cartbar.classList.add("active");

    });

});
// Display Cart
function displayCart() {

    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach((product, index) => {

        subtotal += product.price * product.quantity;

        const item = document.createElement("div");
        item.classList.add("cart-item");

        item.innerHTML = `
            <img src="${product.image}" width="60">

            <div class="details">

                <h4>${product.name}</h4>

                <p>₹${product.price}</p>

                <div class="quantity-box">

                    <button class="minus">-</button>

                    <span class="qty">${product.quantity}</span>

                    <button class="plus">+</button>

                </div>

                <h4>
                    Total : ₹
                    <span class="total">
                        ${product.price * product.quantity}
                    </span>
                </h4>

                <p class="remove">Remove</p>

            </div>
        `;

        cartItems.appendChild(item);

    });

    document.getElementById("subtotal").innerText = "₹" + subtotal;
    document.getElementById("total").innerText = "₹" + subtotal;

}
// Cart Open
cartIcon.addEventListener("click", () => {
    displayCart();
    
    cartbar.classList.add("active");
});

// Cart Close
closeCart.addEventListener("click", () => {
    cartbar.classList.remove("active");
});

// Page Load
displayCart();
updateCartCount();

// Events (Plus / Minus / Remove)
cartItems.addEventListener("click", (e) => {

    const cartItem = e.target.closest(".cart-item");
    if (!cartItem) return;

    const index = [...cartItems.children].indexOf(cartItem);

    // Plus
    if (e.target.classList.contains("plus")) {

        cart[index].quantity++;

        saveCart();

        displayCart();

        updateCartCount();

    }

    // Minus
    if (e.target.classList.contains("minus")) {

        if (cart[index].quantity > 1) {

            cart[index].quantity--;

            saveCart();

            displayCart();

            updateCartCount();

        }

    }

    // Remove
    if (e.target.classList.contains("remove")) {

        cart.splice(index, 1);

        saveCart();

        displayCart();

        updateCartCount();

    }

});
const placeOrderBtn = document.getElementById("placeOrderBtn");

placeOrderBtn.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("🎉 Order Placed Successfully!\nThank you for shopping with us.");
setTimeout(() => {
    localStorage.setItem("hideSignup", "true");
window.location.href = "index.html";
}, 1000);
    // Cart clear
    cart = [];

    saveCart();

    displayCart();

    updateCartCount();

    cartbar.classList.remove("active");

});