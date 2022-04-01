let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
// Shopping cart  
let supplements = {
  redwine_1: {name: 'Preworkout Shatter Ripped', price: 1515},
  redwine_2: {name: 'Shatter Elite', price: 1785},
  redwine_3: {name: 'Protein Mass Gainer', price: 2000},
  redwine_4: {name: 'Nitrotech Ripped Weight Loss', price: 2000},
  rosewine_1:{name: 'Iso Whey Clear Post Workout', price: 1200},
  rosewine_2:{name: 'BCAA intra workout Amino build', price: 1650},
  sparklingwine_1:{name: 'Celltech Creatine', price: 1750},
  sparklingwine_2:{name: 'Celltech Creatine Musclebuilding', price: 1350},
  whitewine_1:{name: 'Platinum multivitamin', price: 950},
  whitewine_2:{name: 'Masstech Elite Protein', price: 2050},
  whitewine_3:{name: 'Nitrotech Elite Protein', price: 1800},
  whitewine_4:{name: 'Celltech Creactor Postworkout', price: 1200},
}

function add_to_cart(selection){
  alert(`${supplements[selection].name} - Rs${supplements[selection].price} added to cart.`);
  let new_item = `${supplements[selection].name},${supplements[selection].price}`
  let current_cart = localStorage.getItem('cart');

  if (current_cart === ''){
      localStorage.setItem('cart', new_item);
  }
  else{
      localStorage.setItem('cart', current_cart + ',' + new_item);
  }
}

function check_cart(){
  let cart = localStorage.getItem('cart');
  console.log(cart);

  if (cart === null || cart === ''){
      console.log("Cart is empty!")
      localStorage.setItem('cart', '');
  }
  else{
      console.log("Cart is not empty");
  }

}
function reset_cart(){
  console.log("Reset Cart");
  localStorage.setItem('cart', '');
}

function update_cart(){
  let cart = localStorage.getItem('cart');

  if (cart === ''){
      console.log("Cart is empty!");
  }
  else {
      let cart_arr = cart.split(",")
      console.log(cart_arr);
      let table = document.getElementById('cart_table');
      let total = 0;
      let len = cart_arr.length;
      for (let idx = 0; idx <= len; idx += 2) {
          let row = document.createElement('tr');
          let item = document.createElement('td');
          let qty = document.createElement('td');
          let price = document.createElement('td');
          price.style.textAlign = 'right';
          if (idx === len) {
              qty.innerText = 'Total:';
              qty.style.fontWeight = 'bold';
              price.innerText = total.toLocaleString();
              price.style.fontWeight = 'bold';
              price.style.borderTop = '1px solid black';
              price.style.borderBottom = '1px solid black';
          }
          else {
              console.log(cart_arr[idx], cart_arr[idx + 1]);
              item.innerText = cart_arr[idx].trim();
              qty.innerText = '1';
              qty.style.paddingLeft = '10px';
              price.innerText = Number(cart_arr[idx + 1].trim()).toLocaleString();
              total += Number(cart_arr[idx + 1].trim());
          }​
          row.appendChild(item);
          row.appendChild(qty);
          row.appendChild(price);
          table.appendChild(row);
      }
  }
}
// check_cart()
// reset_cart()
