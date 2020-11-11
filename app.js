const func_container = ()=> {
    let p_tally = 0;
    let c_tally = 0;

    //initialise game
    const startgambit = ()=> {
        const init_button = document.querySelector('.intro button');
        const introduction = document.querySelector('.intro');
        const interrogation = document.querySelector('.interrogation');

        init_button.addEventListener('click', ()=> {
            introduction.classList.add("fadewane");
            interrogation.classList.add("fadewax");
        });
    };

    //play round
    const playround = ()=> {
        const options = document.querySelectorAll('.options button');
        const playcoin = document.querySelector('.player-coin');
        const compcoin = document.querySelector('.computer-coin');
        const coinanim = document.querySelectorAll('.coins img');

        coinanim.forEach(coin =>{
            coin.addEventListener("animationend", function(){
                this.style.animation = '';

            });
        });
        //available computer options
        const compoptions = ["trust", "forsake"];

        options.forEach(option=> {
            option.addEventListener('click', function() {
                //computer: random selection
                const rng = Math.floor(Math.random() * 2); 
                const compchoice = compoptions[rng];
                //update participant images
                playcoin.src = `./assets/${this.textContent}.png`;
                compcoin.src = `./assets/comp_assets/${compchoice}.png`;
                //call comparison function
                setTimeout(()=>{comparison(this.textContent, compchoice);}, 2000);
                //trigger css animation sequences
                playcoin.style.animation = "p_slide .75s ease";
                compcoin.style.animation = "c_slide 1.5s ease";
            });
        });
    };

    const sentencing = ()=>{
        const play_tally = document.querySelector('.player-score p');
        const comp_tally = document.querySelector('.computer-score p');
        play_tally.textContent = p_tally;
        comp_tally.textContent = c_tally;
    };

    const comparison = (playchoice, compchoice)=> {
        //fundamental logic for the dilemma
        const winner = document.querySelector('.winner');
        
        //checks for players electing to trust their partner
        if(playchoice === 'trust'){
            if(compchoice === 'forsake'){
                winner.textContent = 'Your trusted partner ratted you out. His charge is dropped, but you face twelve more months in the clink.'
                p_tally++;p_tally++;p_tally++;p_tally++;p_tally++;p_tally++;p_tally++;p_tally++;p_tally++;p_tally++;p_tally++;p_tally++;
                sentencing();
                return;
            }else{
                winner.textContent = 'Without a confession from either thief, you are both sentenced to spend two more months in jail.';
                p_tally++; p_tally++;
                c_tally++; c_tally++;
                sentencing();
                return;
            }
        }
        //checks for players choosing to betray their partner
        if(playchoice === 'forsake'){
            if(compchoice === 'forsake'){
                winner.textContent = 'Both of you rat out the other - both of you are sentenced to another five months in prison.'
                c_tally++; c_tally++; c_tally++; c_tally++; c_tally++; 
                p_tally++; p_tally++; p_tally++; p_tally++; p_tally++; 
                sentencing();
                return;
            }else{
                winner.textContent = 'You have thrown your loyal partner to the wolves; he will recieve twelve more months in jail for your crimes.';
                c_tally++; c_tally++; c_tally++; c_tally++; c_tally++; c_tally++; c_tally++; c_tally++; c_tally++; c_tally++; c_tally++; c_tally++; 
                sentencing();
                return;
            }
        }
    };

    startgambit();
    playround();

}

func_container();