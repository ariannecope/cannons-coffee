let container = document.querySelector(".container");
let form = document.getElementById("form");

form.addEventListener("submit", onSubmit);
function onSubmit(event) {
	event.preventDefault();

	const data = new FormData(form);
	const dataObj = Object.fromEntries(data.entries());
    console.log("our data:", dataObj);

    let name = dataObj.name;
	let email = dataObj.email;
	let phone = dataObj.phone;
    let comments = dataObj.comments;
    let coffeeflavors = dataObj.coffeeflavors;
    let choose = dataObj.choose;

	let namePara = document.createElement("p");
	namePara.textContent = name;
	container.appendChild(namePara);

    let choosePara = document.createElement("p");
	choosePara.textContent = choose;
	container.appendChild(choosePara);

    let coffeeflavorsPara = document.createElement("p");
	coffeeflavorsPara.textContent = coffeeflavors;
	container.appendChild(coffeeflavorsPara);

    let emailPara = document.createElement("p");
	emailPara.textContent = email;
	container.appendChild(emailPara);

    let phonePara = document.createElement("p");
	phonePara.textContent = phone;
	container.appendChild(phonePara);

    let commentsPara = document.createElement("p");
	commentsPara.textContent = comments;
	container.appendChild(commentsPara);



    let message = `Thank you ${name} We appreciate your interest in ${choose}. Your favorite coffee flavor is ${coffeeflavors} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}."`
    
    let messagePara = document.createElement("p");
	messagePara.textContent = message;
	container.appendChild(messagePara);

	form.reset();
}