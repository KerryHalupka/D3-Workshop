// console.log("it's working!")
var cat_image = document.getElementById("cat");
var button=document.getElementById("button")
console.log(cat_image)
cat_image.addEventListener("click", meow)

function meow(){
	alert("Meow");
}

button.addEventListener("click", thanks)

function thanks(){
	alert("GO AWAY!!");
}