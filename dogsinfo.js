function showDogInfo(name, breed, fees) {
  alert(`Dog Information:\nName: ${name}\nBreed: ${breed}\nAdoption Fees: ${fees}`);
}

let totalCost = 0;

function updateTotalCost() {
  alert("Total Cost: $" + totalCost);
}


for (let i = 1; i <= 12; i++) {
  const dogElement = document.getElementById(`dog${i}`);
  if (dogElement) {
    dogElement.addEventListener('click', function() {
      const cost = parseFloat(this.getAttribute('data-cost'));
      totalCost += cost;
      updateTotalCost();
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('checkout-form');

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const fullNameElement = document.getElementById('full-name');
      const emailElement = document.getElementById('email');
      const streetElement = document.getElementById('street');
      const cityElement = document.getElementById('city');
      const stateElement = document.getElementById('state');
      const zipElement = document.getElementById('zip');
      const firstTimeAdopterElement = document.querySelector('input[name="first"]:checked');
      const locationElement = document.getElementById('location');
      const adoptedDogElement = document.querySelector('input[name="special"]:checked');

      if (fullNameElement && emailElement && streetElement && cityElement && stateElement && zipElement) {
        console.log(`Name: ${fullNameElement.value}`);
        console.log(`Email Address: ${emailElement.value}`);
        console.log(`Street Address: ${streetElement.value}`);
        console.log(`City: ${cityElement.value}`);
        console.log(`State: ${stateElement.value}`);
        console.log(`Zip Code: ${zipElement.value}`);
        
        if (firstTimeAdopterElement) {
          console.log(`First Time Adopter: ${firstTimeAdopterElement.value}`);
        }
        
        console.log(`Pickup Location: ${locationElement.value}`);

        if (adoptedDogElement) {
          console.log(`Adopted Dog: ${adoptedDogElement.value}`);
        }

        alert('Thank you. The form information has been received');
      }
    });
  }
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