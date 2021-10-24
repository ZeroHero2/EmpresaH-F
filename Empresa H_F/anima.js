window.addEventListener('load', function(){
	new Glider(document.querySelector('.carru_lista'), {
		slidesToShow: 4,
		slidesToScroll: 2,
		draggable: false,
		dots: '.carru__indicadores',
		arrows: {
			prev: '.izquierda',
			next: '.derecha'
		},
		responsive: [
			{
			  // pantalla mas grande  >= 775px
			  breakpoint: 150,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // pantalla mas grande >= 1024px
			  breakpoint: 435,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  // pantalla mas grande >= 150px
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}

		]
	});
});


window.addEventListener('load', function(){
	new Glider(document.querySelector('.clist'), {
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: false,


		arrows: {
			prev: '.izq',
			next: '.der'
		},



		responsive: [
			{
			  // pantalla mas grande  >= 775px
			  breakpoint: 150,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // pantalla mas grande >= 1024px
			  breakpoint: 435,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  // pantalla mas grande >= 150px
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			  }
			}

		]
	});

	const glider = new Glider(document.getElementById('clist'));

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 1;

 function slide () {
   slideTimeout = setTimeout(
     function () {	
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

sliderAuto(glider, 2000);
});






