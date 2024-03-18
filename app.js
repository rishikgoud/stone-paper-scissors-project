let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector(".result");
const userscorepara = document.querySelector("#u_s");
const compscorepara = document.querySelector("#c_s");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
const compgame = ()=>{
    const options = ["stone","paper","scissors"];
    const compchoice = Math.floor(Math.random()*3);
    return (options[compchoice]);
}
const drawscore=()=>{
    console.log("game was draw");
    msg.innerText = "Game is Draw. Play again";
    msg.style.backgroundColor = "#16354D"
}
const showwinner=(userwin, userchoice, comchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comscore++;
        compscorepara.innerText = comscore;
        msg.innerText = `you Lose! ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice)=>{
    console.log("user choice :",userchoice);
    const comchoice = compgame();
    console.log("comp choice :",comchoice);
    if(userchoice === comchoice){
        drawscore()
    }
    else{
        let userwin = true;
        if(userchoice==="stone"){
            //paper, scissor
            userwin = comchoice === "paper" ? false : true ;
        }
        else if(userchoice==="paper"){
            userwin = comchoice === "scissors"? false : true;
        }
        else{
            userwin = comchoice === "stone"? false : true;
        }
        showwinner(userwin, userchoice , comchoice);
    }
}