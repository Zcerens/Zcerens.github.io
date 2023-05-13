var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults()
{
	var average = 0;
	var total= 0
	for(var i=0;i<arr.length;i++)
	{
		total += parseInt(arr[i].score) 
		console.log(total)
		average = total/arr.length
		//average= (average*(i)+scores[i])/(i+1);
	}
	var maxScore = -Infinity;
	var nameWithMaxScore = "";
	for (var i = 0; i < arr.length; i++) {
	  var currentScore = parseInt(arr[i].score);
	  var currentName = arr[i].name
	  if (currentScore > maxScore) {
		maxScore = currentScore;
		nameWithMaxScore = currentName
	  }
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> High score is "+nameWithMaxScore+ " with a score of "+maxScore + "<br \> "
}

function displayScores(){
    var tableHtml = "<h2> Scores </h2><br /> <tr> <td><b>Name</b></td><td><b>Score</b></td></tr> <br \> ";
    for(var i = 0; i < arr.length; i++) {
        tableHtml += "<tr><td>" + arr[i].name + "</td><td>" + arr[i].score + "</td></tr>"; // her eleman için isim ve skor değerleriyle beraber bir HTML satırı 
    }
    document.getElementById("scores_table").innerHTML = tableHtml; // oluşturulan HTML kodu, "scores_table" içeriği olarak atanıyor
}

let arr = []; 

function addScore() {
  let name = document.getElementById("name").value; // name alanının değeri alınıyor
  let score = document.getElementById("score").value; // score alanının değeri alınıyor

  if(name && score){ 
    let obj = {name: name, score: score}; 
    arr.push(obj); 
    console.log(arr); 
  } else {
    alert("Please fill in both name and score fields!"); 
  }
}

document.getElementById("add").addEventListener("click", addScore); // Add to Array butonuna tıklanınca addToArray fonksiyonu çalıştırılıyor



