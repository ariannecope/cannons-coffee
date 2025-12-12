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
    let pwd = dataObj.pwd;

    let namePara = document.createElement("p");
	namePara.textContent = name;
	container.appendChild(namePara);

    let emailPara = document.createElement("p");
	emailPara.textContent = email;
	container.appendChild(emailPara);

    let pwdPara = document.createElement("p");
	pwdPara.textContent = pwd;
	container.appendChild(pwdPara);

    let message = `"Welcome, ${name}! You are logged in!"`
    	let messagePara = document.createElement("p");
	messagePara.textContent = message;
	container.appendChild(messagePara);

	form.reset();
}