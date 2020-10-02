$(function() {
	
    // loan amount
    var slider = document.getElementById("loan-amt");
    var output = document.getElementById("val-loan-amt");
    output.innerHTML = slider.value;
    var output_amount_ori = slider.value;
    output.innerHTML = thousands_separators(output.innerHTML);
    var output_amount_calc = 1000;

    slider.oninput = function() {
    	output.innerHTML = this.value;
    	output.innerHTML = thousands_separators(output.innerHTML);
    	output_amount_calc = this.value;

    }

    // loan tenure
    var slider1 = document.getElementById("loan-tenure");
    var output1 = document.getElementById("val-loan-tenure");
    output1.innerHTML = slider1.value;

    slider1.oninput = function() {
    	output1.innerHTML = this.value;
    }

    // loan Monthly
    function thousands_separators(num){
    	var num_parts = num.toString().split(".");
    	num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    	return num_parts.join(".");
    }

    function myCalcOri() {
    	var amount = parseInt(output_amount_ori);
    	var years = parseInt(output1.innerHTML);
    	let total_monthly = amount / (years*12);
    	total_monthly = total_monthly.toFixed(2);
    	document.getElementById("val-loan-monthly").innerHTML = total_monthly;
    }

    function myCalc() {
    	var amount = parseInt(output_amount_calc);
    	var years = parseInt(output1.innerHTML);
    	let total_monthly = amount / (years*12);
    	total_monthly = total_monthly.toFixed(2);
    	total_monthly = thousands_separators(total_monthly);
    	document.getElementById("val-loan-monthly").innerHTML = total_monthly;

    	var element = document.getElementById("lay_icon_title");
    	var element1 = document.getElementById("icon1");
    	var element2 = document.getElementById("icon2");
    	var element3 = document.getElementById("icon3");
    	var element4 = document.getElementById("icon4");
    	var element5 = document.getElementById("icon5");
    	var element6 = document.getElementById("icon6");
    	var element7 = document.getElementById("icon7");
    	var element8 = document.getElementById("icon8");
    	var element9 = document.getElementById("icon9");
    	var element10 = document.getElementById("icon10");

    	if (amount > 4500000 || years >8) {
    		element4.classList.add("hide");
    		element5.classList.add("hide");
    		element6.classList.add("hide");
    		element7.classList.add("hide");
    		element8.classList.add("hide");
    		element9.classList.add("hide");
    		element10.classList.add("hide");
    		document.getElementById("lay_icon_title").innerHTML = "3";
    	} 
    	else if (amount > 4000000 || years >6) {
    		element6.classList.add("hide");
    		element7.classList.add("hide");
    		element8.classList.add("hide");
    		element9.classList.add("hide");
    		element10.classList.add("hide");
    		element4.classList.add("show");
    		element5.classList.add("show");
    		element4.classList.remove("hide");
    		element5.classList.remove("hide");
    		document.getElementById("lay_icon_title").innerHTML = "5";
    	}
    	else if (amount > 3000000 || years >4) {
    		element8.classList.add("hide");
    		element9.classList.add("hide");
    		element10.classList.add("hide");
    		element4.classList.add("show");
    		element5.classList.add("show");
    		element6.classList.add("show");
    		element7.classList.add("show");
    		element8.classList.add("show");
    		element4.classList.remove("hide");
    		element5.classList.remove("hide");
    		element6.classList.remove("hide");
    		element7.classList.remove("hide");
    		element8.classList.remove("hide");
    		document.getElementById("lay_icon_title").innerHTML = "8";
    	}
    	else if (amount > 2000000 || years >2) {
    		element10.classList.add("hide");
    		element4.classList.add("show");
    		element5.classList.add("show");
    		element6.classList.add("show");
    		element7.classList.add("show");
    		element8.classList.add("show");
    		element9.classList.add("show");
    		element4.classList.remove("hide");
    		element5.classList.remove("hide");
    		element6.classList.remove("hide");
    		element7.classList.remove("hide");
    		element8.classList.remove("hide");
    		element9.classList.remove("hide");
    		document.getElementById("lay_icon_title").innerHTML = "9";
    	}
    	else {
    		element4.classList.remove("hide");
    		element5.classList.remove("hide");
    		element6.classList.remove("hide");
    		element7.classList.remove("hide");
    		element8.classList.remove("hide");
    		element9.classList.remove("hide");
    		element10.classList.remove("hide");
    		element4.classList.add("show");
    		element5.classList.add("show");
    		element6.classList.add("show");
    		element7.classList.add("show");
    		element8.classList.add("show");
    		element9.classList.add("show");
    		element10.classList.add("show");
    		document.getElementById("lay_icon_title").innerHTML = "10";
    	}
    }

    function submitForm(){
    	var amount = parseInt(output_amount_calc);
    	var years = parseInt(output1.innerHTML);
    	window.location.href='http://172.16.0.144/JACCESS_BOT/portal/_onlineaggregator.php?reset=1&tenure='+years+'&amt='+amount;
    }

    // slider function 
    var slideIndex = 0;
    showSlides();

    function showSlides() {
    	var i;
    	var slides = document.getElementsByClassName("mySlides");
    	var dots = document.getElementsByClassName("dot");
    	for (i = 0; i < slides.length; i++) {
    		slides[i].style.display = "none";  
    	}
    	slideIndex++;
    	if (slideIndex > slides.length) {slideIndex = 1}    
    		for (i = 0; i < dots.length; i++) {
    			dots[i].className = dots[i].className.replace(" active", "");
    		}
    		slides[slideIndex-1].style.display = "block";  
    		dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 5000); // Change image every 2 seconds
      }
});