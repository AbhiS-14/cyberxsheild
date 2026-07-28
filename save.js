window.onload = function () {

    document.getElementById("showName").innerHTML = localStorage.getItem("name");
    document.getElementById("showEmail").innerHTML = localStorage.getItem("email");
    document.getElementById("showMobile").innerHTML = localStorage.getItem("mobile");
    document.getElementById("showAge").innerHTML = localStorage.getItem("age");
    document.getElementById("showGender").innerHTML = localStorage.getItem("gender");
    document.getElementById("showCollege").innerHTML = localStorage.getItem("college");
    document.getElementById("showCourse").innerHTML = localStorage.getItem("course");
    document.getElementById("showCity").innerHTML = localStorage.getItem("city");
    document.getElementById("showState").innerHTML=localStorage.getItem("state");
    document.getElementById("showSource").innerHTML = localStorage.getItem("source");
    document.getElementById("showComments").innerHTML = localStorage.getItem("comments");

};