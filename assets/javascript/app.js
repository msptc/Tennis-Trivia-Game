// $(document.)ready(function(){ - code would go here if I could get jquery to work - 
// });

//  I had issues getting my timer to stop at the end of the quiz and submit the answers so far
// 2 minute time for the quiz, but see above

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var twoMinutes = 60 * 2,
    // I had the same issue using jquery here, $('timeRemaining') did not work like document.getElementById does...    
    display = document.getElementById("timeRemaining");
    startTimer(twoMinutes, display);
};

submitAnswers();

function submitAnswers(){
    var total = 4;
    var score = 0;

    var q1 = document.forms["quiz"]["q1"].value;
    var q2 = document.forms["quiz"]["q2"].value;
    var q3 = document.forms["quiz"]["q3"].value;
    var q4 = document.forms["quiz"]["q4"].value;
   
// correct answers array
    var answers = ["c", "a", "c", "a"];

// if statements to determine if user's answers are correct based on above array
    if(q1 == answers[0]){
        score++;
    }
    if(q2 == answers[1]){
        score++;
    }
    if(q3 == answers[2]){
        score++;
    }
    if(q4 == answers[3]){
        score++;
    }
    
// display results
// I realize that I need to use jquery for document.getelementbyid, but it doesn't work when I do. it would look like $('#results')
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You Scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';

    return false

}