const pages = [
    { title: "Home", url: "index.html" },
    { title: "About", url: "about.html" },
    { title: "Services", url: "services.html" },
    { title: "Gallery", url: "gallery.html" },
    { title: "Contact", url: "contact.html" },
    { title: "Password Checker", url: "pc.html" },
    { title: "Password Genrator", url: "pg.html" },
    { title: "Awarness", url: "awarness.html" },
     { title: "Quiz", url: "consent.html" },
       { title: "Save Details", url: "UserDetailsSave.html" },
       { title: "Profile", url: "login.html" }
];

function scontent() {

    let search = document.getElementById("search").value.toLowerCase().trim();
    let result = document.getElementById("result");

    // Hide suggestions if nothing is typed
    if (search === "") {
        result.innerHTML = "";
        return;
    }

    let output = "";
    let page;
    for(page of pages)
    {
        if(page.title.toLowerCase().includes(search))
        {
             output += `<div><a href="${page.url}">${page.title}</a></div>`;
        }
    }

  

    result.innerHTML = output;
}
