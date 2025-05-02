
const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>my dynamic section </h1>

<p> Extra added inside paragraph </p>
<ul> 
<li>frist item </li>
<li>second item </li>

<li>third item </li>

<li>for item </li>


</ul>

`

main.appendChild(section);
