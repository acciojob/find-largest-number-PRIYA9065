function findLargest(a, b, c) {
  //your code here
	let largest_number;
	if(a >= b && a >= c){
		largest_number = a;
	}
	else if(b >= a && b >= c){
		largest_number = b;
	}
	else{
		largest_number = c;
	}

	return largest_number;
}
const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
