
$(document).ready(function(){
	$("#city-type").focus(function(){		 
        $(this).val('');
    });
});

$(document).ready(function(){
	$("#submit-btn").click(showCity);
});

	function showCity() {
	var inputText_= $("#city-type").val().trim();
	if (inputText_=="") 
	{
		alert("Please Enter City Name");
	}
	else if(inputText_==="New York"||
			inputText_==="New York City"||
			inputText_==="NYC")
	{
		changeBackGroundImg("images/nyc.jpg");
	}
	else if(inputText_==="San Francisco"||
			inputText_==="Bay Area"||
			inputText_==="SF")
	{
		changeBackGroundImg("images/sf.jpg");
	}
	else if(inputText_==="Los Angeles"||
			inputText_==="LA"||
			inputText_==="LAX")
	{
	 	changeBackGroundImg("images/la.jpg");
	}
	else if(inputText_==="Austin"||
			inputText_==="ATX")
	{
		changeBackGroundImg("images/Austin.jpg");
	} 
	else if(inputText_==="Sydney"||
			inputText_==="SYD")
	{
	 	changeBackGroundImg("images/sydney.jpg");
	} 
	else 
	{
		alert("City Not Available!");
	}	
 };

 function changeBackGroundImg(cityname){ 	
 	 $("body").css('background-image', `url(${cityname})`);
 	 event.preventDefault(); 	
 };