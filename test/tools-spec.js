var expect=require("chai").expect;
var tools=require("../lib/tools");

describe("printRoman()",function(){

	it("Print the Roman value of digit",function(){
		var results=tools.printRoman({digit:4});
		expect(results).to.equal("IV");
	});
	
});
