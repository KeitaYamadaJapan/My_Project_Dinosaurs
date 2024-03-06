    // Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
	this.species = species;
	this.image = `images/${species.toLowerCase()}.png`;
	this.weight = weight;
	this.height = height;
	this.diet = diet;
	this.where = where;
	this.when = when;
	this.fact = fact;

	this.sayHello = function () {
		// console.log("Hello");
	};
}


    // Create Dino Compare Weight Method
    // Weight is in lbs. 
Dino.prototype.compareWeight = function(yourWeight){
	const diff = Math.trunc(this.weight - yourWeight)
	if(diff > 0){
		return `${this.species} was ${diff} lbs heavier than you !!`
	}else{
		return `${this.species} was ${-diff} lbs lighter than you !!`
	}
}

    // Create Dino Compare Height Method 
    // height is in inches.
Dino.prototype.compareHeight = function(yourHeight){
	const diff = Math.trunc(this.height - yourHeight)
	if(diff > 0){
		return `${this.species} is ${diff} inches taller than you !!`
	}else{
		return `${this.species} is ${-diff} inches shorter than you !!`
	}
}

	// CreateDino Compare Height and Weight
	// Weight in JSON file is in lbs, height in inches.

Dino.prototype.compHeightandWeight = function(yourHeight, yourWeight){
	const diff1 = Math.trunc(this.height - yourHeight)
	const diff2 = Math.trunc(this.weight - yourWeight)
	if(diff1 > 0 && diff2 > 0){
		return `${this.species} is ${diff1} inches taller and ${diff2} lbs heavier than you.`
	}
	if(diff1 < 0 && diff2 < 0){
		return `${this.species} is ${-diff1} inches lower and ${-diff2} lbs lighter than you.`
	}		
	if(diff1 > 0){
		return `${this.species} is ${diff1} inches taller than you.`
	}
	if(diff2 > 0){
		return `${this.species} is ${diff2} lbs heavier than you.`
	}
	return `Both ${this.species} and you are same height and weight.`
};

   // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

Dino.prototype.compareDiet = function(yourDiet){
	if(this.diet === "carnivor"){
		if(yourDiet === "carnivor"){
			return `${this.species} was carnivor. And you are carnivor. You might fight him.`
		}else{
			return `${this.species} was carnivor. But you are not carnivor. Run away !!!`
		}
	} else if (this.diet === "omnivor"){
		return `${this.species} is ${this.diet}. Be careful for him when you meet him.`
	} else{
		return `${this.species} is ${this.diet}. Please give him grass if you go time slip to his age.`
	}
};




// Dino data (from dino.json provided in the starter code)
const dinoData = [
	{
		species: "Triceratops",
		weight: 13000,
		height: 114,
		diet: "herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "First discovered in 1889 by Othniel Charles Marsh",
	},
	{
		species: "Tyrannosaurus Rex",
		weight: 11905,
		height: 144,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "The largest known skull measures in at 5 feet long.",
	},
	{
		species: "Anklyosaurus",
		weight: 10500,
		height: 55,
		diet: "herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Anklyosaurus survived for approximately 135 million years.",
	},
	{
		species: "Brachiosaurus",
		weight: 70000,
		height: "372",
		diet: "herbavor",
		where: "North America",
		when: "Late Jurasic",
		fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
	},
	{
		species: "Stegosaurus",
		weight: 11600,
		height: 79,
		diet: "herbavor",
		where: "North America, Europe, Asia",
		when: "Late Jurasic to Early Cretaceous",
		fact:
			"The Stegosaurus had between 17 and 22 seperate places and flat spines.",
	},
	{
		species: "Elasmosaurus",
		weight: 16000,
		height: 59,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
	},
	{
		species: "Pteranodon",
		weight: 44,
		height: 20,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
	},
	{
		species: "Pigeon",
		weight: 0.5,
		height: 9,
		diet: "herbavor",
		where: "World Wide",
		when: "Holocene",
		fact: "All birds are living dinosaurs.",
	},
];



    // Create Dino Objects
const dinoObjects = dinoData.map((dino) => new Dino(
	dino.species,
	dino.weight,
	dino.height,
	dino.diet,
	dino.where,
	dino.when,
	dino.fact
	))

    // Create Human Object
const human = new Dino(
    "human",
    60,
    5.5,
    "omnivore",
    "worldwide",
    "now",
    "Humans are the most inteligent species on the planet"
)


function init(){

    // Use IIFE to get human data from form

	(function getHumanData(){
		const name = document.getElementById("name").value;
		const height = document.getElementById("feet").value + 
		document.getElementById("inches").value / 12;
		const weight = document.getElementById("weight").value;
		const diet = document.getElementById("diet").value.toLowerCase();
		human.name = name;
		human.weight = weight;
		human.height = height;
		human.diet = diet;
	})();

// Check all field filled.
	if(!checkNameInput(human.name)){
		alert("Fill name field")
		return
	}else if(!checkHeightInput(human.height)){
		alert("Fill height fields.")
		return
	}else if(!checkWeightInput(human.weight)){
		alert("Fill weitht field")
		return
	}
	//
	//console.log(dinoObjects)

	//HumanObject join into center of dinoObjects
	dinoObjects.splice(4,0,human);

	//console.log(human)
 
    // Generate Tiles for each Dino in Array
    const tiles = dinoObjects.map((dino) => {
    	const documentFragment = document.createDocumentFragment();
    	const containerDiv = document.createElement("div");
    	containerDiv.className = "grid-item";

    	//console.log(dino.species === "human")

    	const img = document.createElement("img");
    	img.src = dino.image;
    	const title = document.createElement("h3");
    	const fact = document.createElement("p");
    	if(dino.species !== "human" && dino.species !== "Pigeon"){
    		fact.innerHTML = dino.fact;
    	}
    	const comp = document.createElement("p");

    	if(dino.species === "human"){
    		title.innerHTML = human.name;
    		fact.innerHTML = `${human.fact}. I am a human. And I am a ${human.diet}.`
    		comp.innerHTML = `${human.fact}. I am a human. And I am a ${human.diet}.`
    	}else{
    		title.innerHTML = dino.species

    		if(dino.species === "Pigeon") {
    			fact.innerHTML = dino.fact + " " + dino.compareWeight(human.weight);
    			comp.innerHTML = dino.fact + " " + dino.compareHeight(human.height);
    		}else if(dino.diet === "herbavor"){
  				comp.innerHTML = dino.compHeightandWeight(human.height, human.weight);    			
    		}else if(dino.diet === "carnivor"){
    			comp.innerHTML = dino.compareDiet(human.diet)
    		}
    	}



		containerDiv.appendChild(title);
		containerDiv.appendChild(img);

		const rnum = getRandomInt(9)
	// Random choice display "dino fact" or "result of compare with you"
		if(rnum % 2 === 0){
			containerDiv.appendChild(fact);
		}else{
			containerDiv.appendChild(comp)
		}
		//containerDiv.appendChild(fact);
		//containerDiv.appendChild(comp);
		documentFragment.appendChild(containerDiv);

		return documentFragment;
    } );

    	// Add tiles to DOM
	const grid = document.getElementById("grid");
	tiles.forEach(tile=>grid.appendChild(tile))
	
	// Remove form from screen
	document.getElementById('dino-compare').innerHTML = "";
}
    
    // function for Create random number.
function getRandomInt(max) {
	return 1 + Math.floor(Math.random() * Math.floor(max));
}

// Input validator
const checkNameInput=(name)=>{
	return name.length 
}
const checkHeightInput=(height)=>{
	return height.length
}
const checkWeightInput=(weight)=>{
	return weight.length
}

// On button click, prepare and display infographic

const submitBtn = document.querySelector("#btn");
submitBtn.addEventListener("click", init);


