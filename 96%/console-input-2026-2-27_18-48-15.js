var smallestNumberField = undefined; 

for (let textField of textFields) {
	if (!smallestNumberField) {
    smallestNumberField = textField;
		continue; 
	}  

	let	smallestNumberFieldWords = smallestNumberField.innerText.split(" ")
	let	currentNumberFieldWords = textField.innerText.split(" ")

	let smallestNumber = parseInt(smallestNumberFieldWords[smallestNumberFieldWords.length()-1]);
	let currentNumber = parseInt(currentNumberFieldWords[currentNumberFieldWords.length()-1]);

console.log(currentNumber)

	if (currentNumber < smallestNumber) {
    smallestNumberField = textField;
	}
}

console.log(smallestNumberField)