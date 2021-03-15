var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  },
];

function output() {

//shows names from warrior list
document.getElementsByTagName("body")[0].innerHTML = "";
warriors.forEach((e) => {
  
//if code to only show damage/health above specific number
if (e.damage >= 2 && e.health >= 10) {

  //shows name,damage and health on screen 
 document.getElementsByTagName("body")[0].innerHTML += `

<div>
<h1>Name: ${e.name}</h1>
<h2>Damage: ${e.damage}</h2>
<h2>Health: ${e.health}</h2>
</div>
<br>`;

}
});
};