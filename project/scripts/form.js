
if (typeof(Storage) !== "undefined") {
   
    var storedName = localStorage.getItem("name");
    var storedEmail = localStorage.getItem("email");
    var storedComments = localStorage.getItem("comments");
    
    if (storedName && storedEmail && storedComments) {
    
        document.getElementById("name").value = storedName;
        document.getElementById("email").value = storedEmail;
        document.getElementById("comments").value = storedComments;
    }
} else {
    alert("Local storage is not supported in your browser");
}

document.getElementById("myForm").addEventListener("submit", function(event) {
   
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("comments", comments);



    alert("Form submitted successfully!");
});
