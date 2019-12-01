
	
enter.onclick=function(){
	  var myList=document.getElementById("containOfList"),
	 newElement=document.createElement("p"),
	 btn=document.createElement("button"),
	 textBtn=document.createTextNode("remove");
	 myAtrr1=document.createAttribute("id"),
	myAtrr2=document.createAttribute("id");
	 myAtrr1.value='close';
	  myAtrr2.value='praggraph';
	 var text=document.createTextNode(YourInput);
	var YourInput=document.getElementById("enterYourInput").value;
	var enter=document.getElementById("enter");
	
	if(YourInput !=""){	
            
			btn.setAttributeNode(myAtrr1); 
		    btn.appendChild(textBtn);
		   btn.classList.add("btn");
			newElement.appendChild(text);
		    newElement.setAttributeNode(myAtrr2);
		    newElement.appendChild(btn);
			myList.appendChild(newElement);
	}
	
    else{
	console.log("x");
}
	var close=document.getElementById("close");
	var praggraph=document.getElementById("praggraph");
	for(var i=0;i<=close.length;i++){
		close.onclick=function(){
			praggraph.classList.add("remove")
			
		}
	}
	
}




