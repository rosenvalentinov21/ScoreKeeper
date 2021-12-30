const player1 = {
    score : 0,
    button : document.querySelector("#p1Button"),
    display : document.querySelector("#p1ScoreDisplay")
}

const player2 = {
    score : 0,
    button : document.querySelector("#p2Button"),
    display : document.querySelector("#p2ScoreDisplay")
}

const resetButton = document.querySelector("#reset");

let haveWinner = false;

let ScoreSelected = document.querySelector("#playTo");
let winningScore = 3;

ScoreSelected.addEventListener('change' , function()
{
    winningScore = parseInt(this.value);

    resetGame();
})


function updatePlayers(player , opponent)
{
    player.score += 1;
    if(!haveWinner)
    {
        if(parseInt(player.score) === winningScore)
        {
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");

            player.button.disabled = true;
            opponent.button.disabled = true;

            haveWinner = true;
        }
        player.display.textContent = player.score;
    }
}



player1.button.addEventListener('click' , function(e)
{
            updatePlayers(player1 , player2);
})

player2.button.addEventListener('click' , function(e)
{
            updatePlayers(player2 , player1);
})

resetButton.addEventListener('click' , resetGame)

function resetGame(e) {
    
    for(let p of [player1 , player2])
    {
        p.score = 0;
        p.display.textContent = p.score;
        p.button.disabled = false;
        p.display.classList.remove("has-text-success" , "has-text-danger");
    }
}