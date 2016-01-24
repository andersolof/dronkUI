$(function(){
	
	var slider0Val, slider1Val,slider2Val,slider3Val,slider4Val,slider5Val,slider6Val;
	var qrcode = new QRCode(document.getElementById("qrcode"), {
		width : 250,
		height : 250
	});
	
	function makeCode () {		
		//console.log(slider0Val);
		//var elText = document.getElementById("text");
		qrcode.makeCode("["+[slider0Val, slider1Val, slider2Val, slider3Val, slider4Val, slider5Val, slider6Val].join(',')+"],15");
	}
	function countCL(){
		$("#sliders-total").text(Math.round(Number(slider0Val)/10000)+Math.round((Number(slider1Val)/85714)*10)+Math.round((Number(slider2Val)/75000)*10)+Math.round((Number(slider3Val)/80000)*10)+Math.round((Number(slider4Val)/85714)*10)+Math.round((Number(slider5Val)/85714)*10)+Math.round((Number(slider6Val)/85714)*10)+" cl");
	}
		$("#create").click(function(){
			makeCode();
		});
	

			$("#slider0").noUiSlider({
				start: [0],
				connect: "lower",
				range: {
					'min': [  0 ],
					'max': [ 100000 ]
				},format: wNumb({
					decimals: 0
				})
			});

				$("#slider0").Link('lower').to('-inline-<div class="tooltip tooltip-arrow-down"></div>', function ( value ) {
					slider0Val=value;
					countCL();
					$(this).html(
						'<span>' + Math.round(Number(value)/1000)+ " ml" + '</span>'
					);
				});
				
				
				$("#slider1").noUiSlider({
				start: [0],
				connect: "lower",
				range: {
					'min': [  0 ],
					'max': [ 85714 ]
				},format: wNumb({
					decimals: 0
				})
			});

				$("#slider1").Link('lower').to('-inline-<div class="tooltip tooltip-arrow-down"></div>', function ( value ) {
					slider1Val=value;
					countCL();
					$(this).html(
						'<span>' + Math.round((Number(value)/85714)*100)+ " ml" + '</span>'
					);
				});
				
				
				$("#slider2").noUiSlider({
				start: [0],
				connect: "lower",
				range: {
					'min': [  0 ],
					'max': [ 75000 ]
				},format: wNumb({
					decimals: 0
				})
			});

				$("#slider2").Link('lower').to('-inline-<div class="tooltip tooltip-arrow-down"></div>', function ( value ) {
					slider2Val=value;
					countCL();
					$(this).html(
						'<span>' + Math.round((Number(value)/75000)*100)+ " ml" + '</span>'
					);
				});
				
				$("#slider3").noUiSlider({
				start: [0],
				connect: "lower",
				range: {
					'min': [  0 ],
					'max': [ 80000 ]
				},format: wNumb({
					decimals: 0
				})
			});

				$("#slider3").Link('lower').to('-inline-<div class="tooltip tooltip-arrow-down"></div>', function ( value ) {
					slider3Val=value;
					countCL();
					$(this).html(
						'<span>' + Math.round((Number(value)/80000)*100)+ " ml" + '</span>'
					);
				});
			
				
				$("#slider4").noUiSlider({
				start: [0],
				connect: "lower",
				range: {
					'min': [  0 ],
					'max': [ 85714 ]
				},format: wNumb({
					decimals: 0
				})
			});

				$("#slider4").Link('lower').to('-inline-<div class="tooltip tooltip-arrow-down"></div>', function ( value ) {
					slider4Val=value;
					countCL();
					$(this).html(
						'<span>' + Math.round((Number(value)/85714)*100)+ " ml" + '</span>'
					);
				});
				
				$("#slider5").noUiSlider({
				start: [0],
				connect: "lower",
				range: {
					'min': [  0 ],
					'max': [ 85714 ]
				},format: wNumb({
					decimals: 0
				})
			});

				$("#slider5").Link('lower').to('-inline-<div class="tooltip tooltip-arrow-down"></div>', function ( value ) {
					slider5Val=value;
					countCL();
					$(this).html(
						'<span>' + Math.round((Number(value)/85714)*100)+ " ml" + '</span>'
					);
				});
				
				$("#slider6").noUiSlider({
				start: [0],
				connect: "lower",
				range: {
					'min': [  0 ],
					'max': [ 85714 ]
				},format: wNumb({
					decimals: 0
				})
			});

				$("#slider6").Link('lower').to('-inline-<div class="tooltip tooltip-arrow-down"></div>', function ( value ) {
					slider6Val=value;
					countCL();
					$(this).html(
						'<span>' + Math.round((Number(value)/85714)*100)+ " ml" + '</span>'
					);
				});
				

});
