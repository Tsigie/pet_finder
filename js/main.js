import fetchJsonp from 'fetch-jsonp';
import { isValidZip, showAlert } from './validate';

// API Key 
// 20fec6fb4d3c4a440c209deecb79c218
// API Secret
// 6d727f9f632fc2da4e5cb28c39928ce5


const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

// Fetch Pet Finder API
function fetchAnimals(e) {
  e.preventDefault();

  // Get User Input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;

  // Validate Zip
  if (!isValidZip(zip)) {
    showAlert('Please Enter A Valid Zipcod', 'danger');
    return;
  }

  // Fetch Pets
  fetchJsonp(`https://www.petfinder.com/developers/api-key=20fec6fb4d3c4a440c209deecb79c218`, 
    { 
      jsonpCallbackFunction: 'callback'
    }
  )

  .then(res => res.json())
  .then(data => showAnimals(data.petfinder.pets.pet))
  .catch(err => console.log(err));
}
