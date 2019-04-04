
	var az;
	function add(a,b) {
			return a+b;
		}
		function minus(a,b) {
			return a-b;
		}
		function multiply(a,b){
			return a*b;
		}
		function divide(a,b){
			return a/b;
		}

	$(document).ready(function(){
		// var x=$("#text-basic").val();
		// var y=$("#text-basic1").val();
		var messageSpan =$("#msg");
		messageSpan.hide();

      		$("#selectOperation").change(function(){
        var operations = $(this).children("option:selected").val();
        window.az=operations
       });

		$("#btnCalculate").click(function(){
		var a=	parseInt($("#txt1").val());
		var b=parseInt($("#txt2").val());

		var c=a+b;
		//checking if there is  some input in the textboxes
		if($("#txt1").val()==""||$("#txt2").val()==""){
				messageSpan.css("color","red");
				messageSpan.show();
		}
		//checking if there is  some input in the textboxes
		if($("#txt1").val()!=""||$("#txt2").val()!=""){

				messageSpan.hide();
		}

		// alert(az); // get the select option text from the dropdownlist
		if(az=="Divide"&&($("#txt1").val()!=""||$("#txt2").val()!="")){
			// alert(window.divide(a,b));
			// alert(txtOperation);
			var txtOperation= ($("#txt1").val())+"/"+($("#txt2").val());
			$("#txtOp").val(txtOperation);
			$("#txtResult").val(window.divide(a,b));
			window.location.href="#page2"; // programmatic page redirection in javascript;


		}
		else if (az=="multiply"&&($("#txt1").val()!=""||$("#txt2").val()!="")){
			// alert( window.multiply(a,b));
			var txtOperation= ($("#txt1").val())+"*"+($("#txt2").val());
			$("#txtOp").val(txtOperation);
			$("#txtResult").val(window.multiply(a,b));
			window.location.href="#page2"; // programmatic page redirection in javascript;

		}
		else if(az=="minus"&&($("#txt1").val()!=""||$("#txt2").val()!="")){
			// alert( window.minus(a,b));
			var txtOperation= ($("#txt1").val())+"-"+($("#txt2").val());
			$("#txtOp").val(txtOperation);
			$("#txtResult").val(window.minus(a,b));
			window.location.href="#page2"; // programmatic page redirection in javascript;

		}
		else if(az=="add"&&($("#txt1").val()!=""||$("#txt2").val()!="")){
			// alert(window.plus(a,b));
			var txtOperation= ($("#txt1").val())+"+"+($("#txt2").val());
			$("#txtOp").val(txtOperation);
			$("#txtResult").val(window.add(a,b));
			window.location.href="#page2"; // programmatic page redirection in javascript;

		}

					});
		$("#btnBack").click(function(){
			window.location.href="#page1";
			messageSpan.hide();

		});


});
