
const cart = document.querySelector('.cart');
const minus = document.querySelector('.minus');
const quantity = document.querySelector('.quantity');
const plus = document.querySelector('.plus');
const mainImgBox = document.querySelector('.image-box');
const modal = document.querySelector('.modal-img-container');
const closeModal = document.querySelector('.modal-close-box');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-container');
const header = document.querySelector('.header-container');
const closeNav = document.querySelector('.close');
const thumbs = document.querySelectorAll('.thumbs-box');
const mainImg = document.querySelector('.main-img');
const previous = document.querySelector('.previous-box');
const arr = [];
const next = document.querySelector('.next-box');
const thumbsModal = document.querySelectorAll('.modal-thumbs-box');
const nextModal = document.querySelector('.modal-next-box');
const modalMainImg = document.querySelector('.modal-main-img');
const previousModal = document.querySelector('.modal-previous-box');
const addBtn = document.querySelector('.btn-add');
const itemsCart = document.querySelector('.cart-items');
const emptyMsg = document.querySelector('.empty-msg');
const deleteItem = document.querySelector('.delete-box');
const count = document.querySelector('.count');

function toogle(elem) {
  if (elem.style.visibility === 'visible') {
    elem.style.visibility = 'hidden';
  } else {
    elem.style.visibility = 'visible';
  }
}

cart.addEventListener('click', () => {
  const cartSection = document.querySelector('.cart-box');
  if (cartSection.style.display === 'block') {
    cartSection.style.display = 'none';
  } else {
    cartSection.style.display = 'block';
  }
});

minus.addEventListener('click', () => {
  if (quantity.innerText !== '0') {
    const newValue = parseInt(quantity.innerText, 10) - 1;
    quantity.innerText = newValue;
  }
});

plus.addEventListener('click', () => {
  const newValue = parseInt(quantity.innerText, 10) + 1;
  quantity.innerText = newValue;
});

mainImgBox.addEventListener('click', () => {
  toogle(modal);
});

closeModal.addEventListener('click', () => {
  toogle(modal);
});

menu.addEventListener('click', () => {
  header.style.position = 'initial';
  toogle(nav);
});

closeNav.addEventListener('click', () => {
  toogle(nav);
  header.style.position = 'relative';
});

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', ({ target: { childNodes } }) => {
    const active = document.querySelector('.active');
    const { src } = childNodes[1];

    active.classList.remove('active');
    mainImg.src = src;
    thumb.classList.add('active');
  });
});

thumbs.forEach((thumb) => {
  const nodes = thumb.childNodes;
  arr.push(nodes[1].src);
});

previous.addEventListener('click', () => {
  const srcMainImg = mainImg.src;
  const index = arr.indexOf(srcMainImg);
  if (index !== 0) {
    mainImg.src = arr[index - 1];
  } else {
    mainImg.src = arr[3];
  }
});

next.addEventListener('click', () => {
  const srcMainImg = mainImg.src;
  const index = arr.indexOf(srcMainImg);
  if (index !== 3) {
    mainImg.src = arr[index + 1];
  } else {
    mainImg.src = arr[0];
  }
});

nextModal.addEventListener('click', () => {
  const modalActive = document.querySelector('.modal-active');
  modalActive.classList.remove('modal-active');
  const srcMainImg = modalMainImg.src;
  const index = arr.indexOf(srcMainImg);
  if (index !== 3) {
    modalMainImg.src = arr[index + 1];
    thumbsModal[index + 1].classList.add('modal-active');
  } else {
    modalMainImg.src = arr[0];
    thumbsModal[0].classList.add('modal-active');
  }
});

previousModal.addEventListener('click', () => {
  const modalActive = document.querySelector('.modal-active');
  modalActive.classList.remove('modal-active');
  const srcMainImg = modalMainImg.src;
  const index = arr.indexOf(srcMainImg);
  if (index !== 0) {
    modalMainImg.src = arr[index - 1];
    thumbsModal[index - 1].classList.add('modal-active');
  } else {
    modalMainImg.src = arr[3];
    thumbsModal[3].classList.add('modal-active');
  }
});

thumbsModal.forEach((thumb) => {
  thumb.addEventListener('click', ({ target: { childNodes } }) => {
    const modalActive = document.querySelector('.modal-active');
    const { src } = childNodes[1];
    modalActive.classList.remove('modal-active');
    modalMainImg.src = src;
    thumb.classList.add('modal-active');
  });
});

addBtn.addEventListener('click', () => {
  const count = document.querySelector('.count');
  const price = document.querySelector('.value');
  const quantityCart = document.querySelector('.quantity-cart');

  if (quantity.innerText !== '0') {
    const calculation = parseInt(quantity.innerText, 10) * 125;
    quantityCart.innerText = quantity.innerText;
    count.innerText = quantity.innerText;
    price.innerText = `$${calculation}.00`;
    emptyMsg.style.visibility = 'hidden';
    itemsCart.style.visibility = 'visible';
    count.style.visibility = 'visible';
  }
});

deleteItem.addEventListener('click', () => {
  emptyMsg.style.visibility = 'initial';
  itemsCart.style.visibility = 'hidden';
  count.style.visibility = 'hidden';
});