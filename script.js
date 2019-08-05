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

function valueSelector(num){
	if(num == 'clear'){
		document.getElementById("screen").value = all = '';
	} else if (num == '='){
		// the logical way
		try{
			all = eval(all);
		} catch(error) {
			if(error.name = 'EvalError'){
				all = 'ERR';
			}
		}
		document.getElementById("screen").value = all;
		// // spliting based on operators
		// num_split = all.match(/[^\d()]+|[\d.]+/g);
		// console.log(num_split); 
		// // what if you get sth like ["..+", "2"]
		// // while(num_split == 3){
		// if(num_split.length == 3){
		// 	if(num_split[2]== '0' && num_split[1]=='/'){
		// 		document.getElementById("screen").value = 'ERR';
		// 	} else{
		// 		all = operate(num_split[1], num_split[0], num_split[2]);
		// 		document.getElementById("screen").value = all;
		// 	}
		// } else{
		// 	// if(num_split[3] is a) is an operator?? Lol
		// 	num_split.shift()
		// }
	} else {
		all = all + num;
		document.getElementById("screen").value = all;
		if(num == '.'){
		check_all = all.match(/[^\d()]+|[\d.]+/g);
		// duplicate = check_all.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
		}
	}
	return num;
}

var all = ''
