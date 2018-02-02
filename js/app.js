var resultArray = [];
var score = 0;
var counter = 0;
var answerCor;
var answerIncor1;
var answerIncor2;
var answerIncor3;
var checked;
var h2 = $('.question');

$(document).ready(function() {
  $.get('https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple').done(function(data) {
    console.log(data);
    resultArray = data.results;
    callOut();
  });
});

function callOut(){

      $( ".question" ).fadeOut(500, function() {
      // Animation complete.
      });
      $( ".question" ).fadeIn(500, function() {
      });

      $("#submit").off("click");
      $(".score").hide();

      var question = resultArray[counter].question; //grabbing value of question & inserting into thr HTML
      $(h2).text(question);
      console.log('run 2nd');

      answerCor = resultArray[counter].correct_answer;
      $("label[for='radioButton1']").text(answerCor);
      $("#radioButton1").val(answerCor);

      answerIncor1 = resultArray[counter].incorrect_answers[0];
      $("label[for='radioButton2']").text(answerIncor1);
      $("#radioButton2").val(answerIncor1);

      answerIncor2 = resultArray[counter].incorrect_answers[1];
      $("label[for='radioButton3']").text(answerIncor2);
      $("#radioButton3").val(answerIncor2);

      answerIncor3 = resultArray[counter].incorrect_answers[2];
      $("label[for='radioButton4']").text(answerIncor3);
      $("#radioButton4").val(answerIncor3);
      console.log($('#radioButton4').val());

      // var checked = $(".rad").is(":checked").val();

      checked = $( "input[name=answers]:checked" ).val();

      if (checked === answerCor) {
        counter++;
        score++;
      } else {
        counter++;
      };

      if (counter >= 10) {
        $(".game").hide();
        $("#submit").hide();
        $(".score").show();
        $(".score").append("<p>"+score+"</p>");
      };
    //check if correct ansewer is seleccted
      // };
  $("#submit").on("click", callOut);
}
