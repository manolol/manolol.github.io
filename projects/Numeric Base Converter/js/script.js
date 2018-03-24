let number, base, baseC, c_number_i, c_number, count, letters = ['A', 'B', 'C', 'D', 'E', 'F'];

console.log('Call the function: convert(number, number_base, base_to_convert);');

/*
	---functions---
	--reverse string
	--decimal to b
	--b to decimal
	--b to c (using the two ones above)
	--convert
	--convertHTML
*/

const reverseString = (str) => {
	let splitString = str.split("");
	let reverseArray = splitString.reverse();
	let joinArray = reverseArray.join("");
	return joinArray;
}

const convertFromDecToB = () => {
		
	console.log('function convertFromDecToB');
	while(true) {
		if(this.number < this.baseC) {
			if(this.number >= 10) {
				this.c_number_i += letters[this.number - 10];
			}
			else { this.c_number_i += this.number; }
			break;
		}
		else {
			// this.baseC > 10 and this.baseC <= 16
			if(this.baseC > 10 && this.baseC <= 16) {
				console.log('rest: ' + this.number%this.baseC);
				if(this.number%this.baseC >= 10) {
					this.c_number_i += letters[this.number%this.baseC - 10];
				}
				else {
					this.c_number_i += this.number%this.baseC;
				}
			}
			else {
				this.c_number_i += this.number%this.baseC;
			}
			// this.c_number_i += this.number%this.baseC --> the rest of the division
			this.number /= this.baseC; // this.number = number / this.baseC;
			this.number = parseInt(this.number);
			console.log('division: ' + this.number);
		}
		this.count++;
	}

	// inverted number
    console.log(this.c_number_i);
    
	// reverse a string if count > 0
	this.c_number = this.c_number_i;
	if(this.count > 0) {
		this.c_number = reverseString(this.c_number_i);
	}
	return this.c_number;
}

const convertFromBToDec = () => {

	console.log('function convertFromBToDec');

	let number_as_string = '', sum = 0;
	number_as_string += this.number;
	console.log('string: ' + number_as_string);
	let splitString = number_as_string.split('');
	console.log('split string: ' + splitString);
	let reverseArray = splitString.reverse();
    // split string
	console.log('split string reversed: ' + reverseArray);
	for(let i = 0; i < splitString.length; i++) {
		for(let j = 0; j < letters.length; j++) {
			if(reverseArray[i] == letters[j]) {
				reverseArray[i] = 10 + j;
			}
		}
		sum += parseInt(reverseArray[i]) * this.base ** i;
		//if(i < splitString)
	}
	return sum;
}

const convertFromBtoC = () => {

	// convert from b to c
	console.log("Convert a number base b to c");
	let dec_number = convertFromBToDec();
	this.number = dec_number;
    return convertFromDecToB();
    
}

const convert = (number, base, baseC) => {

	this.number = number;
	this.base = base;
	this.baseC = baseC;
	this.c_number_i = '';
	this.c_number = '';
	this.count = 0;

	console.log('From base: ' + this. base);
	console.log('To base: ' + this.baseC);
		
	// ---selectors---
		
	if((this.base < 2 || this.base > 16) || (this.baseC < 2 || this.baseC > 16)) {
		return "Not allowed";
	}
	else if(this.base == 10) {
		return convertFromDecToB();
	}
	else if(this.baseC == 10){
		return convertFromBToDec();
	}
	// base b to base c
	else{
		return convertFromBtoC();
	}

	console.log('Call it again: convert(number, number_base, base_to_convert);');

}

const convertHTML = () => {

	if(document.getElementById('number').value != "" && document.getElementById('base').value != "" && document.getElementById('baseC').value != "") {
		let number, base, baseC;
		base = parseInt(document.getElementById('base').value);
		baseC = parseInt(document.getElementById('baseC').value);

		if(base > 10) {
			number = document.getElementById('number').value;
		}
		else {
			number = parseInt(document.getElementById('number').value);
		}

		document.getElementById('result').innerHTML = convert(number, base, baseC);

	}

}

	// setInterval(convertHTML, 1000);