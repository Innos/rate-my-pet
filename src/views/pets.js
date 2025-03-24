import { html } from "lit-html";
import app from "../config/firebaseInit.js";
import { getDatabase, onValue, ref } from "firebase/database";


const template = (pets) => html`<h3>
  ${pets.map(p => petTemplate(p))}
</h3>`;

const petTemplate = (pet) => html`<p id=${pet._id}>${pet.name} - ${pet.animalType} - ${pet.breed}</p>`

export default function (ctx) {
  let db = getDatabase(app);

  const petsRef = ref(db, 'pets/');
  onValue(petsRef, (snapshot) => {
    const petsData = snapshot.val();
    console.log(petsData);
    let pets = [];
    for (const key in petsData) {
        let pet = Object.assign({}, petsData[key]);
        pet._id = key;
        pets.push(pet);
    }

    ctx.render(template(pets));
  }, (error) => {
    console.error(error);
  });
}
