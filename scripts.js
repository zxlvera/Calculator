function operate(operator, a ,b){
	var result = '';
	a = parseFloat(a);
	b = parseFloat(b);

	if(operator=='+') {
		result = add(a,b);
	} else if(operator == '-') {
		result = subtract(a,b);
	} else if(operator == '*') {
		result = multiply(a,b);
	} else if(operator == '/') {
		result = divide(a,b);
	}

	function add(a,b){
		return a + b;
	}
	function subtract(a,b){
		return a - b;
	}
	function multiply(a,b){
		return a * b;
	}
	function divide(a,b){
		return a / b;
	}
	return result;
}

// function decimal(dot) {
//   if (!calculator.displayValue.includes(dot)) {
//     calculator.displayValue += dot;
//   }
// }

function valueSelector(n){
	if(n == 'clear'){
		document.getElementById("screen").value = all = n1 = n2 ='';
		num_split = [];

	} else { 
		// Numbers
		if(n >= 0 && n <= 9) { // to make this float 
			if (num_split[0] == undefined){
				n1 = n1 + n;
				document.getElementById("screen").value = n1;
			} else{
				n2 = n2 + n;
				document.getElementById("screen").value = n2;
			}

		// Operators
		} else if (n == '+' || n == '-' || n == '*' || n == '/') {
			
			if (num_split[0] == undefined ){
				num_split.push(n);
				num_split.push(n1);	
			} else{
				num_split.push(n2);
				document.getElementById("screen").value = n1 = operate(num_split[0], num_split[1], num_split[2]);
				n2 = '';
				num_split = [];
				num_split.push(n);
				num_split.push(n1);
			}

		} else if (n == '=') { // RESULTS
			num_split.push(n2);
			console.log(num_split);
			document.getElementById("screen").value = n1 = operate(num_split[0], num_split[1], num_split[2]);
			n2 = '';
			num_split = [];


		}
	}
	
	return n;
}
var num_split = [];
var n1 = '';
var n2 = '';
var all = ''
