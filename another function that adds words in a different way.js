function addWord(adder, ...words) {
	return words.map((w) => adder + " " + w)
}

console.log(addWord("Placeholder", "I'm a", "Awesome", "Best")); //can be any number of words