function Calculate(){
	var a=prompt("Enter the Two value");
	var b= a+a;
	var c= a-a;
	var d= a*a;
	var e= a/a;
	
	var f=document.getElementsByTagName("p");
	
	f[0].innerHTML=b;
	f[1].innerHTML=c;
	f[2].innerHTML=d;
	f[3].innerHTML=e;
	
	
	
}