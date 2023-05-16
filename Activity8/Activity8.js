// console.log($.fn.jquery);
// console.log($.ui.version);
// console.log($( "#birthday" ).datepicker());
// $(document).ready(function() {
//     $( "#birthday" ).datepicker();
//   });

  $(document).ready(function() {
    $( "#birthday" ).datepicker();
    var languages = [
      "ActionScript",
      "AppleScript",
      "ASP",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Java",
      "C",
      "C++",
      "C#",
      "Dart",
      "Swift",
      "Ruby"
    ];
    $( "#autocomplete" ).autocomplete({
      source: languages
    });
  });