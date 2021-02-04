function go(){
	var a = document.getElementsByClassName("demo");
	a[2].style.color="red";
	a[0].style.color="blue";
	for(i=0;i<a.length;i++)
	{
		a[i].style.textDecoration="underline";
	}
	
}