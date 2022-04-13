let count = 0;

const cardName  = document.querySelector('.card__name');
const next = document.querySelector('.next');
const colorEye = document.querySelector('.color_1');
const colorHair = document.querySelector('.color_2');
const colorSkin = document.querySelector('.color_3');

function Color(el) {
    el.forEach(people => {
        
        switch(people.hair_color){
            case 'blond': people.hair_color ='yellow'; break;
            case 'brown, grey': people.hair_color ='brown'; break;
            case 'auburn, white': people.hair_color ='white'; break;
        }
        switch(people.skin_color) {
            case 'fair': people.skin_color ='red'; break;
            case 'light': people.skin_color ='white'; break;
            case 'white, blue': people.skin_color ='blue'; break;
            case 'white, red': people.skin_color ='white'; break;
        }
        switch(people.eye_color) {
            case 'blue-gray': people.eye_color ='blue'; break;
        }

    })
};

async function loadList() {
    const response = await fetch('https://swapi.dev/api/people');
    const content = await response.json();
    const persons = await content.results;

    Color(persons);

    cardName.innerHTML = persons[count].name;
    colorHair.style.background = persons[count].hair_color;
    colorEye.style.background = persons[count].eye_color;
    colorSkin.style.background = persons[count].skin_color;
}

loadList();

next.addEventListener('click', () => {

    colorHair.style.background = 'none';
    colorEye.style.background = 'none';
    colorSkin.style.background = 'none';

    if(count > 8){
        count = 0
    } else {
        count++;
    }

    loadList();
});
