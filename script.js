function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() == "kuala lumpur") {
    document.getElementById("result").innerHTML = "Correct🎉";
  } else {
    document.getElementById("result").innerHTML = "Incorrect😓"
     } 
  }

function checkAnswer2() {
  const answer = document.getElementById("answer-input-2").value;
  if (answer.toLowerCase() == "good") {
    document.getElementById("result-2").innerHTML = "Congrats😊";
  } else {
    document.getElementById("result-2").innerHTML = "Aww thats sad🥺";
  }
}
