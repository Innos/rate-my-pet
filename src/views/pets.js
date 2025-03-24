import { html } from "lit-html";
import app from "../config/firebaseInit.js";
import { getDatabase, onValue, ref } from "firebase/database";


const template = (pets) => html`<h3>
  ${pets.map(p => petTemplate(p))}
</h3>`;

const petTemplate = (pet) => html`<p>${pet.name} - ${pet.animalType} - ${pet.breed}</p>`

export default function (ctx) {
  let db = getDatabase(app);

  const petsRef = ref(db, 'pets/');
  onValue(petsRef, (snapshot) => {
    const petsData = snapshot.val();
    console.log(petsData);
    ctx.render(template(petsData));
  }, (error) => {
    console.error(error);
  });
}
