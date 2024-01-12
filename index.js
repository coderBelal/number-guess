var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_num = [];
function play() {
  var user_guess = document.getElementById("guess").value;
  if (user_guess < 1 || user_guess > 100) {
    alert("Please enter a number 1 and 100.");
  } else {
    guessed_num.push(user_guess);
    no_of_guesses += 1;
  }
  if (user_guess < answer) {
    msg1.textContent = "Your guess is to low.";
    msg2.textContent = "No. of Guesses:" + no_of_guesses;
    msg3.textContent = "Guessed Numbers are:" + guessed_num;
  } else if (user_guess > answer) {
    msg1.textContent = "Your guess is to high";
    msg2.textContent = "No. Of Guess" + no_of_guesses;
    msg3.textContent = "Guesses Number are:" + guessed_num;
  } else if (user_guess == answer) {
    msg1.textContent = "Yoo You Win!!";
    msg2.textContent = "The Number was:" + no_of_guesses;
    msg3.textContent = "You guessed it in" + no_of_guesses + "Guesses";
    document.getElementById("my_btn").disabled = true;
  }
}
