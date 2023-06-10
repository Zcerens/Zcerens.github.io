$(document).ready(function() {
	var fileName = "cars.json";
   
	  // JSON dosyasını yükle
	  $.getJSON("json_files/" + fileName, function(data) {
		console.log("json_files\\" + fileName);
		//console.log(data);
  
		// HTML içeriği 
		// $.each(data.speakers, function(index, speaker) {
		//   var html = '<h1>' + speaker.title + '</h1>' +
		// 	'<img src="' + speaker.image + '">' +
		// 	'<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>' +
		// 	'<p>' + speaker.text + '</p>';
  
		//   $("main").html(html);
		// });
	  });
	
  });