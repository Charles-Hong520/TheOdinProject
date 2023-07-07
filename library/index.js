const jojo1 = {
  name: "Johnathan Joestar",
  ability: "Hamon",
  enemy: "Dio Brando",
  height: 195
}

const jojo2 = {
  name: "Joseph Joestar",
  ability: "Hamon/Hermit Purple",
  enemy: "Kars",
  height: 195
}
const jojo3 = {
  name: "Jotaro Kujo",
  ability: "Star Platinam",
  enemy: "DIO",
  height: 195
}
const jojo4 = {
  name: "Josuke Higashikata",
  ability: "Crazy Diamond",
  enemy: "Yoshikage Kira",
  height: 180
}

let jojos = [jojo1,jojo2,jojo3,jojo4];

const library = document.querySelector(".library");
for(let jojo of jojos) {
  const div = document.createElement("div");
  const pname = document.createElement('p');
  pname.innerText = jojo.name;
  const pability = document.createElement('p');
  pability.innerText = jojo.ability;
  const penemy = document.createElement('p');
  penemy.innerText = jojo.enemy;
  const pheight = document.createElement('p');
  pheight.innerText =`${jojo.height}`;
  div.append(pname);
  div.append(pability);
  div.append(penemy);
  div.append(pheight);
  library.append(div);
}