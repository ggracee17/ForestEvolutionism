var button = document.getElementById("calculate");
button.addEventListener("click", showWinner);

function showWinner() {
    var first_player = document.getElementById("first_player").value;
    var first_player_name = "player" + first_player;
    var card1 = document.getElementById(first_player_name).value;
    var letter1 = card1[card1.length-1];
    var suit1 = card1[0];
    var second_player = document.getElementById("second_player").value;
    var second_player_name = "player" + second_player;
    var card2 = document.getElementById(second_player_name).value;
    var letter2 = card2[card2.length-1];
    var suit2 = card2[0];
    var winner = '';
    console.log(first_player_name, second_player_name, card1, card2, letter1, letter2, suit1, suit2);

    if (letter1 == letter2) {
        if (suit1 == 's' && suit2 == 'h') {
            winner = first_player;
        } else if (suit1 == 's' && suit2 == 'c') {
            winner = 'tie';
        } else if (suit1 == 's' && suit2 == 'd') {
            winner = second_player;
        } else if (suit1 == 'h' && suit2 == 's') {
            winner = second_player;
        } else if (suit1 == 'h' && suit2 == 'c') {
            winner = first_player;
        } else if (suit1 == 'h' && suit2 == 'd') {
            winner = 'tie';
        } else if (suit1 == 'c' && suit2 == 's') {
            winner = 'tie';
        } else if (suit1 == 'c' && suit2 == 'h') {
            winner = second_player;
        } else if (suit1 == 'c' && suit2 == 'd') {
            winner = first_player;
        } else if (suit1 == 'd' && suit2 == 's') {
            winner = first_player;
        } else if (suit1 == 'd' && suit2 == 'h') {
            winner = 'tie';
        } else if (suit1 == 'd' && suit2 == 'c') {
            winner = second_player;
        } 
    } else {
        if (letter1 == 'K' && letter2 == 'Q') {
            winner = first_player;
        } else if (letter1 == 'K' && letter2 == 'J') {
            winner = second_player;
        } else if (letter1 == 'Q' && letter2 == 'K') {
            winner = second_player;
        } else if (letter1 == 'Q' && letter2 == 'J') {
            winner = first_player;
        } else if (letter1 == 'J' && letter2 == 'K') {
            winner = first_player;
        } else if (letter1 == 'J' && letter2 == 'Q') {
            winner = second_player;
        }
    }

    if (card1 == 'joker' || card2 == 'joker') {
        winner = first_player;
    } 

    if (winner == 'tie') {
        document.getElementById("winner").innerHTML = '平手';
    } else if (winner == '') {
        document.getElementById("winner").innerHTML = '请检查玩家身份输入是否正确';
    } else {
        document.getElementById("winner").innerHTML = winner + '号玩家获胜';
    }
    
}

