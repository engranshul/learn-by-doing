// callback called multiple time problem
var allUserDdata = [];

function logStuf(userData) {
	if (typeof(userData) === "string") {
		console.log(userData);
	} else if (typeof(userData) === "object") {
		for (var items in userData) {
			console.log(items, userData[items]);
		}
	}
}

function getInput(options, callback){
	allUserDdata.push(options);
	callback(allUserDdata);
}

getInput("Alex", logStuf);
getInput({ "Name": "Alex", "Place": "Malaysia" }, logStuf);