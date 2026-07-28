function filterSelection(category){

    let cards = document.querySelectorAll(".card");
    let buttons = document.querySelectorAll(".buttons button");
    let btn;
    for(btn of buttons)
    {
        btn.classList.remove("active")
    }
    event.target.classList.add("active");
let card;
for(card of cards){
        if(category=="all"){
            card.style.display="block";
        }

        else if(card.classList.contains(category)){
            card.style.display="block";
        }

        else{
            card.style.display="none";
        }

    }

}

  