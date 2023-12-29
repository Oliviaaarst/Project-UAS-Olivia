// Togel class active untuk hamburger menu//
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di click//
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Togel class active untuk search form//

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik diluar elemen//
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box //
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");

const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButtons3 = document.querySelectorAll(".item-detail-button3");

const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButtons4 = document.querySelectorAll(".item-detail-button4");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtons2.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal2.style.display = "flex";
      e.preventDefault();
    };
  });

itemDetailButtons3.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal3.style.display = "flex";
      e.preventDefault();
    };
  });

  itemDetailButtons4.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal4.style.display = "flex";
      e.preventDefault();
    };
  });

// click tombol close modal//
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon2").onclick = (e) => {
    itemDetailModal2.style.display = "none";
    e.preventDefault();
  };

document.querySelector(".modal .close-icon3").onclick = (e) => {
    itemDetailModal3.style.display = "none";
    e.preventDefault();
  };

  document.querySelector(".modal .close-icon4").onclick = (e) => {
    itemDetailModal4.style.display = "none";
    e.preventDefault();
  };

// klik di luar modal//

window.onclick = (e) => {
    if (e.target === itemDetailModal) {
      itemDetailModal, itemDetailModal.style.display = "none";
    }
    if (e.target === itemDetailModal2) {
      itemDetailModal2, itemDetailModal2.style.display = "none";
    }
    if (e.target === itemDetailModal3) {
      itemDetailModal3, itemDetailModal3.style.display = "none";
    }
    if (e.target === itemDetailModal4) {
      itemDetailModal4, itemDetailModal4.style.display = "none";
    }
  };
