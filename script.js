let count = 0;

const cardName  = document.querySelector('.card__name');
const next = document.querySelector('.next');
const colorEye = document.querySelector('.color_1');
const colorHair = document.querySelector('.color_2');
const colorSkin = document.querySelector('.color_3');

fetch('https://swapi.dev/api/people')
    .then(response => {
        return response.json()
    })
    .then(json => {
        let content = json;
        let persons = content.results;

        persons.forEach(people => {
        
            if(people.hair_color == 'blond'){
                people.hair_color ='yellow';
            }
            if(people.skin_color == 'fair'){
                people.skin_color ='red';
            }
            if(people.skin_color == 'light'){
                people.skin_color ='white';
            }
            if(people.skin_color == 'white, blue'){
                people.skin_color ='blue';
            }
            if(people.skin_color == 'fair'){
                people.skin_color ='red';
            }
            if(people.hair_color == 'brown, grey'){
                people.hair_color ='brown';
            }
            if(people.skin_color == 'white, red'){
                people.skin_color ='white';
            }
            if(people.hair_color == 'auburn, white'){
                people.hair_color ='white';
            }
            if(people.eye_color == 'blue-gray'){
                people.eye_color ='blue';
            }
        })

        cardName.innerHTML = persons[count].name;
        colorHair.style.background = persons[count].hair_color;
        colorEye.style.background = persons[count].eye_color;
        colorSkin.style.background = persons[count].skin_color;
    })
    .catch(err => {
        alert('arrors:'+ err.massage)
    })

next.addEventListener('click', async() => {

    colorHair.style.background = 'none';
    colorEye.style.background = 'none';
    colorSkin.style.background = 'none';

    if(count > 8){
        count = 0
    } else {
        count++;
    }

    const response = await fetch('https://swapi.dev/api/people');
    const content = await response.json();
    const persons = await content.results;

    persons.forEach(people => {
        
        if(people.hair_color == 'blond'){
            people.hair_color ='yellow';
        }
        if(people.skin_color == 'fair'){
            people.skin_color ='red';
        }
        if(people.skin_color == 'light'){
            people.skin_color ='white';
        }
        if(people.skin_color == 'white, blue'){
            people.skin_color ='blue';
        }
        if(people.skin_color == 'fair'){
            people.skin_color ='red';
        }
        if(people.hair_color == 'brown, grey'){
            people.hair_color ='brown';
        }
        if(people.skin_color == 'white, red'){
            people.skin_color ='white';
        }
        if(people.hair_color == 'auburn, white'){
            people.hair_color ='white';
        }
        if(people.eye_color == 'blue-gray'){
            people.eye_color ='blue';
        }
    })

    cardName.innerHTML = persons[count].name;
    colorHair.style.background = persons[count].hair_color;
    colorEye.style.background = persons[count].eye_color;
    colorSkin.style.background = persons[count].skin_color;
});






