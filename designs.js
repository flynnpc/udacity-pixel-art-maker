// Creates global variables to be used thrughout code
var canvas = $("#pixelCanvas");
var button = $("button, input[type='submit']");
var colorInput = $("#colorPicker").val();

// makeGrid function uses the input values to create a table after
// clearing existing table.
function makeGrid() {
  var row = $("#inputHeight").val();
  var col = $("#inputWeight").val();
  var td = "<td></td>".repeat(col);
  canvas.empty();
  for (row; row > 0; row--) {
    canvas.append("<tr>" + td + "</tr>");
  }
}

// Listens for button to be clicked to call makeGrid function.
// TIP: Do not use bracket inside submit listener.
// It calls it instead of waiting for event
$(function() {
  button.click(function(e) {
    e.preventDefault();
    makeGrid();
  });
});

// Updates the value of colorInput when user selects new color from palette.
$("#colorPicker").change(function(event) {
  colorInput = event.target.value;
});

// delegates click event to existing td child elements and changes
// the cell's background color to colorInput value.
// canvas.on("click", "td", function(event) {
//   $(this).attr("bgcolor", colorInput);
// });
canvas.on("mousedown", "td", function(event) {
  $(this).attr("bgcolor", colorInput);
});