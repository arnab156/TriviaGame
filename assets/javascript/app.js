
var audio = new Audio("assets/images/TaDA.mp3");
$(".questions").hide();
$("#display").hide();
$("#result").hide();
$("#display").text("30"); //timer default text and not related to timer function

//quiz starts when clicked on the button

$("#btn").on("click", function(){
    // hide the start button
    $("#btn").hide();
    $("#result").hide();
    //give alert on time and question
    alert("You have 5 questions and 1 minutes to answer all question");
    // show all the questions and next button for next question
    $(".questions").show();
    $("#display").show();     

    // Can call it using function and reinitialize it with restart btn.  
    var number = 10; //Timer length 
    var intervalId;
    var correct = 0;
    var incorrect = 0;
    var unans = 0;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        //  Decrease number by one.
        number--;
        //  Show the number in the #show-number tag. timer shuts down the system and calculates the points etc.
        $("#display").html("<h2>" + number + "</h2>");
            if (number === 0) {
            $("#result").append("<h2>Time's Up! Here is the result: </h2>");
            calc_result ();
            }
    }
    run();
    // setTimeout(timeUp, 1000 * 10); //1 minutes timer     
    var answer = [2,2,3,4,2];
        var userAnswer1;
        var userAnswer2;
        var userAnswer3;
        var userAnswer4;
        var userAnswer5;
        var userAnswers = [];

    // GET VALUE OF ANSWER CLICKED

    $(".option1").on('click', function (storeTriviaBtnAnswer) {	
        userAnswer1 = $('input[name="question1"]:checked').val();
    }); 

    $(".option2").on('click', function (storeTriviaBtnAnswer) {	
        userAnswer2 = $('input[name="question2"]:checked').val();
    }); 

    $(".option3").on('click', function (storeTriviaBtnAnswer) {	
        userAnswer3 = $('input[name="question3"]:checked').val();
    }); 
    $(".option4").on('click', function (storeTriviaBtnAnswer) {	
        userAnswer4 = $('input[name="question4"]:checked').val();
    }); 
    $(".option5").on('click', function (storeTriviaBtnAnswer) {	
        userAnswer5 = $('input[name="question5"]:checked').val();
    }); 
    // // CREATE ANSWER ARRAY OF USER ANSWERS
    function createArrayOfUserAnswers() {
        userAnswers.push(userAnswer1);
        userAnswers.push(userAnswer2);
        userAnswers.push(userAnswer3);
        userAnswers.push(userAnswer4);
        userAnswers.push(userAnswer5);
        // console.log(userAnswers);
    }
    //function should check the checked value vs answer value. 

    function compareArray() {
        createArrayOfUserAnswers();
        var userAnswersLength = userAnswers.length;
        // console.log(userAnswersLength);
        for (var i = 0; i < userAnswersLength; i++) {
            if (answer[i] == userAnswers[i]) {
                    correct++;
            } else if (userAnswers[i] === undefined) {
                    unans++;
            } else {
            incorrect++;
            }
        }
    }
    // last function should call all the calcultaions function and then play a winning noise, and declare all the results.
    function calc_result () {   
        compareArray();
        audio.play();
        // USE MODALS - -> Bootstrap.
        // alert ("The result is being calculated");
        $(".questions").hide();
        $("#result").show();
        $("#btn").hide();
        $("#display").hide();
        $("#result").append("<h2>" +"Correct Answers: "  + correct  + "</h2>");
        $("#result").append("<h2>" +"Incorrect Answers:"  + incorrect  + "</h2>");
        $("#result").append("<h2>" +"Unanswered:"  + unans + "</h2>");    
    }
});



