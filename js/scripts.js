$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var person3Input = $("input#person3").val();
    var person4Input = $("input#person4").val();
    var animalInput= $("input#animal").val();
    var animalInput2= $("input#animal2").val();
    var exclamationInput = $("input#exclamation").val();
    var exclamationInput2 = $("input#exclamation2").val();
    var verbInput = $("input#verb").val();
    var verbInput2 = $("input#verb2").val();
    var nounInput = $("input#noun").val();
    var nounInput2 = $("input#noun2").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".person3").text(person3Input);
    $(".person4").text(person4Input);
    $(".animal").text(animalInput);
    $(".animal2").text(animalInput2);
    $(".exclamation").text(exclamationInput);
    $(".exclamation2").text(exclamationInput2);
    $(".verb").text(verbInput);
    $(".verb2").text(verbInput2);
    $(".noun").text(nounInput);
    $(".noun2").text(nounInput2);

    $("#story").show();

    event.preventDefault();
  });
});
