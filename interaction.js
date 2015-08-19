// console.log("it's working!")
var cat_image = document.getElementById("cat");
var feed_me_button=document.getElementById("feed_me_button")
var run_button=document.getElementById("run_button")

console.log(cat_image)
cat_image.addEventListener("click", meow)

function meow(){
	alert("Meow");
}

feed_me_button.addEventListener("click", feed)
run_button.addEventListener("click", run)

function feed(){
	// alert("Yum!!");
	cat_image.style.width=(cat_image.offsetWidth+30)+'px';
}

function run(){
	cat_image.style.width=(cat_image.offsetWidth-30)+'px';
}