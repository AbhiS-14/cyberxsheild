let score = 0;
let current = 0;
let answered = false;

let questions = document.querySelectorAll(".question");

function check(correct)
{
    if(answered) return;

    answered = true;

    if(correct)
    {
        score++;
    }
}

function next()
{
    answered = false;

    questions[current].style.display = "none";
    current++;

    if(current < questions.length)
    {
        questions[current].style.display = "block";
    }
    else
    {
        document.getElementById("result").style.display="block";
        document.getElementById("result").textContent = 
        "Your Score = " + score + "/" + questions.length;
        document.getElementById("homeBtn").style.display = "block";
        if(score>=5)
        {
            document.body.classList.add("green");
        }
        else
        {
            document.body.classList.add("red");
        }
    }
}
