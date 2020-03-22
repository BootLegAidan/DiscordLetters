var input = document.getElementById("in");
var output = document.getElementById("out");
var button = document.getElementById("btn");
var alert = document.getElementById("alrt");
var help = document.getElementById("help");
var helpTxt = document.getElementById("helpText");
var letters = "abcdefghijklmnopqrstuvwxyz";
var temp = "";
var letter = "";

button.onclick = function() {
	output.innerHTML = "";
	temp = "";
	for (j = 0; j < input.value.length; j++) {
		for (i = 0; i < letters.length; i++) {
			if (input.value.charAt(j) == " ") {
				temp = "\\\n";
			} else if (input.value.charAt(j) == letters.toUpperCase().charAt(i)) {
				letter = letters.toUpperCase().charAt(i);
				temp = `:` + letter + `1:`;
			} else if (input.value.charAt(j) == letters.toLowerCase().charAt(i)) {
				letter = letters.toLowerCase().charAt(i);
				temp = `:` + letter + letter + `1:`;
			}
		}
		output.innerHTML += temp;
	}
	output.innerHTML = output.innerHTML.split("\\").join("");
	output.select();
	document.execCommand("copy");
	input.select();
	alert.innerHTML = "Copied To Clipboard";
};

help.onclick = function() {
	helpTxt.innerHTML =
		`In Order For This To Work, You Need To Be In ` +
		`<a href="//discord.gg/eRGcWRU" target="_blank">This Server (Uppercase)</a>` +
		`And` +
		`<a href="//discord.gg/4ppxt87" target="_blank">This Server (Lowercase)</a>`;
};
input.select();
