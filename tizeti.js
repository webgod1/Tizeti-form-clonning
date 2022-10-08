  var button = document.getElementById("form");
button.onclick = function() {
    var name = document.getElementById("text").value;
    var number =  document.getElementById("number").value;
    var emailA = document.getElementById("email").value;
    if (name == ""|| number == "" || emailA == "") {
        document.getElementById("demo").innerHTML = "Error, Please Provide Your FullName"
    } else {
        document.getElementById("demo").innerHTML = "a";
    }
}

