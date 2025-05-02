
const sections = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px'
    section.style.padding ='5px'
    section.style.backgroundColor = 'lightgray';


}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow'


const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center')
placesContainer.classList.remove('large-text')