var calculate_result = document.getElementById("calculate");
calculate_result.addEventListener("click", showWinner);
var confirm_players = document.getElementById("confirm_players");
confirm_players.addEventListener("click", hidePlayers);

function hidePlayers() {
    var player_number = document.getElementById("no_players").value;
    console.log(player_number);
    document.querySelector('#player13_info').style.visibility = 'visible';
    document.querySelector('#player12_info').style.visibility = 'visible';
    document.querySelector('#player11_info').style.visibility = 'visible';
    document.querySelector('#player10_info').style.visibility = 'visible';
    document.querySelector('#player9_info').style.visibility = 'visible';
    document.querySelector('#player8_info').style.visibility = 'visible';
    document.querySelector('#player7_info').style.visibility = 'visible';
    if (player_number < 13) {
        document.querySelector('#player13_info').style.visibility = 'hidden';
        if (player_number < 12) {
            document.querySelector('#player12_info').style.visibility = 'hidden';
            if (player_number < 11) {
                document.querySelector('#player11_info').style.visibility = 'hidden';
                if (player_number < 10) {
                    document.querySelector('#player10_info').style.visibility = 'hidden';
                    if (player_number < 9) {
                        document.querySelector('#player9_info').style.visibility = 'hidden';
                        if (player_number < 8) {
                            document.querySelector('#player8_info').style.visibility = 'hidden';
                            if (player_number < 7) {
                                document.querySelector('#player7_info').style.visibility = 'hidden';
                            }
                        }
                    }
                }
            }
        }
    }
}

function showWinner() {
    var first_player = document.getElementById("first_player").value;
    var first_player_name = "player" + first_player;
    var first_player_health = "health" + first_player;
    var card1 = document.getElementById(first_player_name).value;
    var health1 = document.getElementById(first_player_health).value;
    var letter1 = card1[card1.length-1];
    var suit1 = card1[0];
    var second_player = document.getElementById("second_player").value;
    var second_player_name = "player" + second_player;
    var second_player_health = "health" + second_player;
    var card2 = document.getElementById(second_player_name).value;
    var health2 = document.getElementById(second_player_health).value;
    var letter2 = card2[card2.length-1];
    var suit2 = card2[0];
    var winner = '';
    var round = document.getElementById("round").value;
    var player_number = document.getElementById("no_players").value;
    var round_health = 0;
    console.log(round, player_number, first_player_name, first_player_health, second_player_name, second_player_health, card1, card2, letter1, letter2, suit1, suit2, health1, health2);
    
    if (letter1 == letter2) {
        if (player_number >= 12) {
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
        } else if (player_number >= 9) {
            if (suit1 == 's' && suit2 == 'h') {
                winner = first_player;
            } else if (suit1 == 's' && suit2 == 'c') {
                winner = second_player;
            } else if (suit1 == 'h' && suit2 == 's') {
                winner = second_player;
            } else if (suit1 == 'h' && suit2 == 'c') {
                winner = first_player;
            } else if (suit1 == 'c' && suit2 == 's') {
                winner = first_player;
            } else if (suit1 == 'c' && suit2 == 'h') {
                winner = second_player;
            } 
        } else if (player_number >= 6) {
            if (suit1 == 's' && suit2 == 'h') {
                winner = 'tie';
            } else if (suit1 == 'h' && suit2 == 's') {
                winner = 'tie';
            } 
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

    if (round == 1) {
        round_health = 2;
    } else if (round == 2) {
        round_health = 3;
    } else if (round == 3) {
        round_health = 4;
    } else if (round == 4) {
        round_health = 5;
    } else if (round == 5) {
        round_health = 6;
    } else if (round == 6) {
        round_health = 7;
    }

    if (winner == 'tie') {
        document.getElementById("winner").innerHTML = 'Tie';
    } else if (winner == '') {
        document.getElementById("winner").innerHTML = 'Please check that player identities are entered correctly';
    } else {
        if (winner == first_player) {
            document.getElementById(first_player_health).value = health1 + round_health;
            document.getElementById(second_player_health).value = health2 - round_health;
            document.getElementById("winner").innerHTML = 'Successful, player ' + winner + ' wins';
        } else {
            document.getElementById(first_player_health).value = health1 - round_health;
            document.getElementById(second_player_health).value = health2 + round_health;
            document.getElementById("winner").innerHTML = 'Failed, player ' + winner + ' wins';
        }
    }
    
}

