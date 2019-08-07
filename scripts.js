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
	return result.toFixed(2);
}

function dots(val, n){
	if(val.indexOf('.') == -1){ //NO DOTS
		val = val + n; 
	} else {
		val = val;
	}
 	return val;
}

function valueSelector(n){
	if(n == 'clear'){
		document.getElementById("screen").value = all = n1 = '0';
		n2 = '';
		num_split = [];

	} else { 
		// Numbers
		if (n >= 0 && n <= 9 || n == '.') {
			if (num_split[0] == undefined) {

				if(n =='.') {
					n1 = dots(n1,n);
				} else {
					if(n1 == '0'){
						n1 = n
					} else {
						n1 = n1 + n;
					}
				}
				document.getElementById("screen").value = n1;
			} else{
				
				if(n =='.') {
					n2 = dots(n2,n);
				} else {
					if(n2 == '0'){
						n2 = n
					} else {
						n2 = n2 + n;
					}
				}
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
var n1 = '0';
var n2 = '';
var all = ''
