function get()
{
    let checkbox=document.querySelector('input[name="consent"]:checked')
    if(checkbox==null)
    {
        alert("Tick The Consent Box")
    }
    else
    {
        alert("Quiz Started")
        window.location.href="quiz.html"
    }
}