$(document).ready(function () {
  // Select the form and list elements
  var $form = $("#myForm");
  var $list = $("#myList");

  // Add a submit event listener to the form
  $form.submit(function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the title and rating inputs
    var titleValue = $("#title").val();
    var ratingValue = $("#rating").val();

    // Append the title and rating to the list
    $list.append(
      "<li>" +
        titleValue +
        " - " +
        ratingValue +
        "</li>" +
        '<button class="removeButton">Remove</button>'
    );

    // Clear the form inputs
    $("#title").val("");
    $("#rating").val("");
  });

  // Add a click event listener to the remove buttons
  $list.on("click", ".removeButton", function () {
    $(this).prev().remove();
    $(this).remove();
  });
});
