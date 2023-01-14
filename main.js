/* WAIT FOR DOM */
document.addEventListener("DOMContentLoaded", function (event) {

    // Button to Calculate Average
    document.getElementById("average").addEventListener('click', calculateAverage);
});

/* FUNCTION DECLARATIONS */
function calculateAverage() {
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    var num3 = parseInt(document.getElementById("input3").value);

    // Calculate Total
    var total = ((num1+num2+num3)/3);

    // Display Total
    document.getElementById("displayAverage").innerHTML = total;
}