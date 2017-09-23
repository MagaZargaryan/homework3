
//Function with three arguments that returns the result ofsome set of operations
const perimetrOfTriangle=function(a,b,c){
return (a+b+c);
};



//Function takes no arguments and returns smth.
const emptyFunction= function(){
return 15;
};



//Function takes arguments, does something but does not return anything
const func= function(m,z,h){
console.log(m+z-h);
}; 


//Function called fullName with arguments firstName and lastName that returns the full name
const firstName=function(){
return 'Margrita';
};
const lastName=function(){
	return'Zargaryan';
};
	const fullName=function(firstName,lastName){
	return firstName + ' ' + lastName;
};


//Function that takes three strings and returns the longest strings
const longestString=function(str1,str2,str3){
	if(str1.length>str2.length&&str1.length>str3.length){
		return str1;
	}else if(str2.length>str1.length&&str2.length>str3.length){
		return str2;
	}else if(str3.length>str1.length&&str3.length>str2.length){
		return str3;
	}
}
	


//Function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
const compare=function(number1,number2){
	if(number1===number2){
	return 0;
	} else if(number1>number2){
		return 1;
	}else if(number1<number2){
		return -1;
	}
	};
	
	
//Function that takes 3 inputs and returns the first the first truethy value
const firstTruthey=function(d,f,g){
	if(d){
		return d;
	}else if(f){
		return f;
	}else if(g){
		return g;
	}
};
	
	





