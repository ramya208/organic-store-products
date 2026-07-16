// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: "AIzaSyAvVZY0hKdhEL3Z5qAiIilB5d_ikR3G6H0",
    authDomain: "ecommerce-app-4a270.firebaseapp.com",
    projectId: "ecommerce-app-4a270",
    storageBucket: "ecommerce-app-4a270.firebasestorage.app",
    messagingSenderId: "308383773928",
    appId: "1:308383773928:web:66d03897cc1960c19e855d",
    measurementId: "G-KNQYC14MSW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
function showLogin() {

    document.getElementById("signupOverlay").style.display = "none";

    document.getElementById("loginOverlay").style.display = "flex";

}

function showSignup() {

    document.getElementById("loginOverlay").style.display = "none";

    document.getElementById("signupOverlay").style.display = "flex";

}
const closeSignup = document.getElementById("closeSignup");

closeSignup.addEventListener("click", function(){

    document.getElementById("signupOverlay").style.display = "none";

});

document.getElementById("signupBtn").addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {

    alert("Signup Successful");

    document.getElementById("signupOverlay").style.display = "none";
    document.getElementById("loginOverlay").style.display = "flex";

})
        .catch((error) => {

            alert(error.message);

        });

});
document.getElementById("loginBtn").addEventListener("click", () => {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            alert("Login Successful");
             document.getElementById("signupOverlay").style.display = "none";
    document.getElementById("loginOverlay").style.display = "none";


    

        })
        .catch((error) => {

            alert(error.message);

        });

});
document.getElementById("showLoginLink").addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById("signupOverlay").style.display = "none";
    document.getElementById("loginOverlay").style.display = "flex";
});

document.getElementById("showSignupLink").addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById("loginOverlay").style.display = "none";
    document.getElementById("signupOverlay").style.display = "flex";
});

const cartIcon = document.querySelector(".ri-shopping-cart-line");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

// cartIcon.addEventListener("click", () => {
//     cartSidebar.classList.add("active");
// });
cartIcon.addEventListener("click", () => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        // Empty cart
        cartSidebar.classList.add("active");

    } else {

        // Product already added
        window.location.href = "product.html";

    }

});
closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});
const shopNowBtn = document.getElementById("shopNowBtn");

shopNowBtn.addEventListener("click", () => {
    window.location.href = "product.html";
});
window.addEventListener("load", () => {

    const hideSignup = localStorage.getItem("hideSignup");

    if (hideSignup === "true") {

        document.getElementById("signupOverlay").style.display = "none";
        document.getElementById("loginOverlay").style.display = "none";

        localStorage.removeItem("hideSignup");

    } else {

        document.getElementById("signupOverlay").style.display = "flex";

    }

});

const cartCount = document.getElementById("cartCount");

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// Page load
updateCartCount();
