function validator() {
  var firstin = document.getElementById("A").value;
  var secondin = document.getElementById("B").value;
  var thirdin = document.getElementById("C").value;
  if (firstin == 0) {
    alert("A can not be zero");
  } else {
    alert("you have to fill this form");
  }
}

function validate(a, b, c) {
  var x1, x2;
  x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  (result1 = x1), (result2 = x2);
  return (
    (document.getElementById("firs").value = "X1 = " + result1),
    (document.getElementById("sec").value = "X2 = " + result2)
  );
}

function reset() {
  return (
    (document.getElementById("A").value = ""),
    (document.getElementById("B").value = ""),
    (document.getElementById("C").value = "")
  );
}
