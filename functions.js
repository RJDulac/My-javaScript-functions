
//function that adds words to array
testArray = ["Change", "Great", "Fail", "Balls"]
const wordAdder = (word) => {
	const wordContainer = [];
	word.forEach((w) => {
		const added = w + " " + "Placeholder";
		wordContainer.push(added);
	});
	return wordContainer;
}

console.log(wordAdder(testArray));

//another word adding function in a different way

function addWord(adder, ...words) {
	return words.map((w) => adder + " " + w)
}

console.log(addWord("Placeholder", "I'm a", "Awesome", "Best")); //can be any number of words

//string splitting function
const intialString = "How are you?";

function stringSplitter (str=initialString) { //default value in parameter
	return str.split(" "); 
}

console.log(stringSplitter("I am fine"));