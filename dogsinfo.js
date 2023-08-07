function showDogInfo(name, breed, fees) {
  alert(`Dog Information:\nName: ${name}\nBreed: ${breed}\nAdoption Fees: ${fees}`);
}


let totalCost = 0;

function updateTotalCost() {
  alert("Total Cost: $" + totalCost);
}

document.getElementById('dog1').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog2').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog3').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog4').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog5').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog6').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog7').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog8').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog9').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog10').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog11').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});

document.getElementById('dog12').addEventListener('click', function() {
  const cost = parseFloat(this.getAttribute('data-cost'));
  totalCost += cost;
  updateTotalCost();
});