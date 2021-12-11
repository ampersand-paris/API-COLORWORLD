//I'm sane

// const helloWorld = () => {
// 	console.log("Hello World")
// }

// helloWorld()

//Connecting to API

$.ajax({
	url: "https://x-colors.herokuapp.com/api/random",
	success: function (colorData) {
	  console.log(colorData);
	},
	error: function (error) {
	  console.log("bad request: ", error);
	},
  });

  //Refractored with promises

  const promise = $.ajax({
	  url: "https://x-colors.herokuapp.com/api/random",
  })

  promise.then(
	  (colorData) => {
		  console.log(colorData);
	  },
	  (error) => {
		  console.log("bad request: ", error);
	  }
  );

  //Refractored again just cuz practice

  $(window).scroll(function(e) {
	e.preventDefault();
  	$.ajax({
	  url: "https://x-colors.herokuapp.com/api/random",
 }).then(
	  (colorData) => {
		  $('body').css("background-color", colorData.hex)
	  },
	  (error) => {
		  console.log("bad request: ", error);
	  }
  );
});

$('form').on('submit', (e) => {
	e.preventDefault();
	const userInput = $('input[type="text"]').val();
  	$.ajax({
	  url: `https://x-colors.herokuapp.com/api/random/` + userInput,
 }).then(
	  (colorData) => {
		  $('body').css("background-color", colorData.hex);
	  },
	  (error) => {
		  console.log("bad request: ", error);
	  }
  );
});

