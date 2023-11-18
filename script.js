function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let i=1;
	if(num==1){
		consolge.log("0");
		else if(num==2 && num==3){
		consolge.log("1");
		}
	}
	while(i<=num){
		let sum=a+b;
		a=b;
		b=sum;
		i++;
		
	}
consolge.log(fibonacci);
	
}

module.exports = fibonacci;
