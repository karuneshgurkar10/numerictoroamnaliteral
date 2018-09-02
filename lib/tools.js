module.exports={

	printRoman(input){
		
		var number=input.digit;
		var repeat=0;
		var roman='';
		var decimalValue=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
		var romanValue=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
		if(number>=0){
		for(var i=0;i<decimalValue.length;i++){
			while(decimalValue[i]<=number){
				repeat=parseInt(number/decimalValue[i]);
				number=number%decimalValue[i];
				console.log(repeat);
				console.log(number);
				for(var j=0;j<repeat;j++){
					roman+=romanValue[i];
				}
			}
		  }
		}
		else {
			console.log("Invalid Number");

		}
		return roman;
		
	}
}