function burger() {
  const burgerMenu = document.getElementById("burgerMenu");
  const burgerBtnOpen = document.getElementById("burgerBtnOpen");
  const burgerBtnClose = document.getElementById("burgerBtnClose");

  console.log("burgerToggle")

  burgerMenu.classList.toggle("invisible");
  burgerBtnOpen.classList.toggle("invisible");
  burgerBtnClose.classList.toggle("invisible");
}

// function burgerOpenClose(){
//   let burgerMenu = document.getElementById("menu");
//   let itemsInMenu =  document.getElementsByClassName('items');
//   let buttonBurger = document.getElementsByClassName('buttonForBurger')[0];
//   if (burgerMenu.classList.contains("closeBurgerMenu")){
//       burgerMenu.classList.remove("closeBurgerMenu");
//       burgerMenu.classList.add("openBurgerMenu");
//       for (let i = 0; i < itemsInMenu.length; i++) {
//           itemsInMenu[i].classList.add('itemsShow')
//       };
//       buttonBurger.classList.remove('buttonClose');
//       buttonBurger.classList.add('buttonOpen');
//   }else{
//       burgerMenu.classList.remove("openBurgerMenu");
//       burgerMenu.classList.add("closeBurgerMenu");
//       for (let i = 0; i < itemsInMenu.length; i++) {
//           itemsInMenu[i].classList.add('itemsHidde')

//       };
//       buttonBurger.classList.remove('buttonOpen');
//       buttonBurger.classList.add('buttonClose');
//   }
// }
