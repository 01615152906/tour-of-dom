
console.log('append.js')
 // where to add
const placesList = document.getElementById('places-list');
// console.log(placesList);
// what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
// add the child
placesList.appendChild(li);



// [2 number]

//where the add


const mainContainer = document.getElementById('main-container');

// what to be added
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);







section.appendChild(ul)

mainContainer.appendChild(section);


//  set innerHtml directly

const sectionDess = document.createElement('section');
sectionDess.innerHTML =`
<h1> my Dress section </h1>

<ul> 

<li> T- shirt </li>
<li> lungi </li>
<li> sando genji </li>

</ul>

`


mainContainer.appendChild(sectionDess);
