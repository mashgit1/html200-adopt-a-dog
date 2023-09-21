$(".grid-item").hover(function(){
  $(this).css("background-color", "#e7e7e7");
  }, function(){
  $(this).css("background-color", "white");
});

function showDogInfo(name, breed, fees) {
  alert(`Dog Information:\nName: ${name}\nBreed: ${breed}\nAdoption Fees: ${fees}`);
}

$(document).ready(function() {
  let totalCost = 0;


  function updateTotalCost() {
      alert("Total Cost: $" + totalCost.toFixed(2));
  }

  
  $('.button-adopt').click(function() {

    
      const cost = parseFloat($(this).data('cost'));

      totalCost += cost;

      updateTotalCost();
  });
});

$('#checkout-form').submit(function(event) {
  event.preventDefault();

  const fullName = $('#full-name').val();
  const email = $('#email').val();
  const street = $('#street').val();
  const city = $('#city').val();
  const state = $('#state').val();
  const zip = $('#zip').val();
  const firstTimeAdopter = $('input[name="first"]:checked').val();
  const location = $('#location').val();
  const adoptedDog = $('input[name="special"]:checked').val();

  console.log(`Name: ${fullName}`);
  console.log(`Email Address: ${email}`);
  console.log(`Street Address: ${street}`);
  console.log(`City: ${city}`);
  console.log(`State: ${state}`);
  console.log(`Zip Code: ${zip}`);
  
  if (firstTimeAdopter) {
    console.log(`First Time Adopter: ${firstTimeAdopter}`);
  }
  
  console.log(`Pickup Location: ${location}`);

  if (adoptedDog) {
    console.log(`Adopted Dog: ${adoptedDog}`);
  }

  alert('Thank you. The form information has been received');
});

const blogPosts = [
  {
    headline: "Traveling With Your Dog",
    imageSrc: "images/blog-1.jpg",
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
  },
  {
    headline: "How To Walk Multiple Dogs",
    imageSrc: "images/blog-2.jpg",
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
  },
  {
    headline: "Teach Your Dog To Fetch!",
    imageSrc: "images/blog-3.jpg",
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
  }
];

document.addEventListener('DOMContentLoaded', function() {
const blogContainer = document.getElementById("blog-posts");


for (const post of blogPosts) {
  const postHTML = `
    <article class="intro-box">
      <div class="grid-intro">
        <div class="grid-intro-item-1">
          <img class="blog-image" src="${post.imageSrc}" alt="${post.headline}">
        </div>
        <div class="grid-intro-item-2">
          <h2>${post.headline}</h2>
          <p>${post.text}</p>
        </div>
      </div>
    </article>
  `;

  blogContainer.innerHTML += postHTML;
}
});