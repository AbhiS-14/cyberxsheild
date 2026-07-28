

     document.body.classList.add("dark-mode");
function changetheme() {
    let theme = document.querySelector(".theme").value;

    document.body.classList.remove("light-mode","dark-mode","blue-mode","matrix-mode")

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    } else if (theme === "blue") {
        document.body.classList.add("blue-mode");
    } else if (theme === "matrix") {
        document.body.classList.add("matrix-mode");
    }
    else if(theme=="light")
    {
        document.body.classList.add("light-mode");
    }

    console.log(theme);
        localStorage.setItem("theme", theme);
}
window.onload = function () {

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {

        document.body.classList.remove("dark-mode", "blue-mode", "matrix-mode","light-mode");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
        } else if (savedTheme === "blue") {
            document.body.classList.add("blue-mode");
        } else if (savedTheme === "matrix") {
            document.body.classList.add("matrix-mode");
        }
        else if (savedTheme === "light") {
            document.body.classList.add("light-mode");
        }

        // Update dropdown if it exists
        let select = document.querySelector(".theme");
        if (select) {
            select.value = savedTheme;
        }
    }

};