/*
Ramanpreet Kaur Shergill
7282353
*/

var flag=false;

function check1() {
	if(document.forms["pizza"]["small"].checked)
		{
			document.forms["pizza"]["smallq"].disabled=false;
			document.forms["pizza"]["scrust"].disabled=false;
		}
	else
		{
			document.forms["pizza"]["smallq"].disabled=true;
			document.forms["pizza"]["scrust"].disabled=true;
		}
}

function check2() {
	if(document.forms["pizza"]["med"].checked)
		{
			document.forms["pizza"]["medq"].disabled=false;
			document.forms["pizza"]["mcrust"].disabled=false;
		}
	else
		{
			document.forms["pizza"]["medq"].disabled=true;
			document.forms["pizza"]["mcrust"].disabled=true;
		}
}

function check3() {
	if(document.forms["pizza"]["large"].checked)
		{
			document.forms["pizza"]["largeq"].disabled=false;
			document.forms["pizza"]["lcrust"].disabled=false;
		}
	else
		{
			document.forms["pizza"]["largeq"].disabled=true;
			document.forms["pizza"]["lcrust"].disabled=true;
		}
}

function check4() {
	if(document.forms["pizza"]["xlarge"].checked)
		{
			document.forms["pizza"]["xlargeq"].disabled=false;
			document.forms["pizza"]["xlcrust"].disabled=false;
		}
	else
		{
			document.forms["pizza"]["xlargeq"].disabled=true;
			document.forms["pizza"]["xlcrust"].disabled=true;
		}
}

function formValidation() {
    var fn = document.forms["personal_detail"]["fname"].value;
     var regex=/^[a-zA-Z]+$/;
	 if (!regex.test(fn))
		{
			alert("Incorrect first name");
			return false;
		}
	
	var ln = document.forms["personal_detail"]["lname"].value;
     var regex=/^[a-zA-Z]+$/;
	 if (!regex.test(ln))
		{
			alert("Incorrect last name");
			return false;
		}
	
	var c = document.forms["personal_detail"]["city"].value;
     var q =/^[a-zA-Z]+$/;
	 if (!q.test(c))
		{
			alert("Incorrect city");
			return false;
		}
	
	var m = document.forms["personal_detail"]["pcode"].value;
	 var n = /^[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
     if(!n.test(m))
		{
			alert("Incorrect Postal Code");
			return false;
		}

	var e = document.forms["personal_detail"]["email"].value;
	var re =  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!re.test(e))
    {
		alert("Invalid email address");
		return false;
    }
	     		  
	var g = document.forms["personal_detail"]["tele"].value;
	var h =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if (!h.test(g))
	{
		  alert("Invalid telephone number");
		  return false;
    }
	
	var pro = document.forms["personal_detail"]["province"].value;
	if (pro == "null")
	{
		alert("Select province");
		return false;
    }
	var add = document.forms["personal_detail"]["address"].value;	
	
	var tax=0;
	var small=document.forms["pizza"]["smallq"].value * 5;
	var med=document.forms["pizza"]["medq"].value * 10;
	var large=document.forms["pizza"]["largeq"].value * 15;
	var xlarge=document.forms["pizza"]["xlargeq"].value * 20;
	
	if(document.forms["pizza"]["scrust"].value == "stuffed")
	{
		small=small + document.forms["pizza"]["smallq"].value * 2;
	}
	
	if(document.forms["pizza"]["mcrust"].value == "stuffed")
	{
		med=med + document.forms["pizza"]["medq"].value * 2;
	}
	
	if(document.forms["pizza"]["lcrust"].value == "stuffed")
	{
		large=large + document.forms["pizza"]["largeq"].value * 2;
	}
	
	if(document.forms["pizza"]["xlcrust"].value == "stuffed")
	{
		xlarge=xlarge + document.forms["pizza"]["xlargeq"].value * 2;
	}
		
	var toppings = 0;
	
	if(document.forms["pizza"]["tomatoes"].checked)
		{
			toppings =toppings +1
		}
		
	if(document.forms["pizza"]["onions"].checked)
		{
			toppings =toppings +1
		}
		
	if(document.forms["pizza"]["spinach"].checked)
		{
			toppings =toppings +1
		}
		
	if(document.forms["pizza"]["broccoli"].checked)
		{
			toppings =toppings +1
		}
	
	if(document.forms["pizza"]["pineapple"].checked)
		{
			toppings =toppings +1
		}
	
	if(document.forms["pizza"]["greenolives"].checked)
		{
			toppings =toppings +1
		}
		
	if(document.forms["pizza"]["greenpeppers"].checked)
		{
			toppings =toppings +1
		}	
		
	if(document.forms["pizza"]["mushrooms"].checked)
		{
			toppings =toppings +1
		}	
		
	if(document.forms["pizza"]["roastedgarlic"].checked)
		{
			toppings =toppings +1
		}
		
	if(document.forms["pizza"]["cheese"].checked)
		{
			toppings =toppings +1
		}	
	
	if(document.forms["pizza"]["hbanana"].checked)
		{
			toppings =toppings +1
		}
		
	if(document.forms["pizza"]["kalamataolives"].checked)
		{
			toppings =toppings +1
		}	
	
	toppings = toppings -1;
	
	var cost=small+med+large+xlarge+(toppings*0.5);
	
	if(pro == "Ontario")
	{
		tax = (13*cost)/100
	}
	else if(pro == "Manitoba")
	{
		tax = (8*cost)/100
	}
	else if(pro == "Quebec")
	{
		tax = (7.5*cost)/100
	}
	else if(pro == "Saskatchewan")
	{
		tax = (5*cost)/100
	}
	
	cost=cost+tax;
	
	flag=true;
	if(flag)
	{
		var info = "Name: "+fn+" "+ln+"\nPhone: "+g+"\nEmail: "+e+"\nAddress: "+add+"\nCity: "+c+"\nPostal Code: "+m+"\nProvince: "+pro+"\n\nPizza Cost: "+cost;
		flag=confirm(info);
		if (flag == true) {
			var fso = new ActiveXObject("Scripting.FileSystemObject");
			var s = fso.CreateTextFile("NewFile.txt", true);
			s.WriteLine(info);
			s.Close();
		}
		else {
				alert("Order cancelled")
				return false;
		}
	}
}  