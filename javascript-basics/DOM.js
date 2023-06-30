const container = document.querySelector('.container');
const pred = document.createElement('p');
pred.style.color = "red";
pred.textContent = "Hey I'm Red!";
const h3blue = document.createElement('h3');
h3blue.style.color = "blue";
h3blue.textContent = "Hey I'm Blue!";

const bpdiv = document.createElement('h3');
bpdiv.style.borderColor = "black";
bpdiv.style.backgroundColor = "pink";

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p = document.createElement('p');
p.textContent = "Me too!";

bpdiv.append(h1);
bpdiv.append(p);

container.appendChild(pred);
container.appendChild(h3blue);
container.appendChild(bpdiv);
