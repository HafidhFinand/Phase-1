"use strict"

function playerGenerator (numOfPlayers){
  const Huruf = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  var players = [];
  for (let i = 0; i < numOfPlayers; i++){
    var player = {};
    player['name'] = Huruf[i];
    player['pos'] = 0;
    players.push(player);
  }
  return players;
}

function dice(){
  return Math.ceil(Math.random() * 6);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function print_board(numOfPlayer, trackLength) {
  var players = playerGenerator(numOfPlayer);
  while (finished(players, trackLength) === false){
    advanced_player(players);
    sleep(1000);
    reset_board();
  }
  console.log(winner(players))


}

function print_line(playerName, pos, trackLength) {
  var track = [];

  for (let i = 0; i < trackLength; i++) {
    if (i === pos) {
      track.push(playerName);
    } else {
      track.push(' ');
    }
  }
  console.log(track.join('|'));
}

function advanced_player(playersObj) {
  for (let i in playersObj){
    print_line(playersObj[i].name, playersObj[i].pos, trackLength);
    playersObj[i].pos += dice();
  }
}

function finished(playersObj, trackLength) {
  for (let i in playersObj){
    if (playersObj[i].pos >= trackLength){
      return true;
    }
  }
  return false;
}

function winner(playersObj) {
  for (let i in playersObj){
    if (playersObj[i].pos >= trackLength){
      return `Race ended; the winner is: ${playersObj[i].name}`;
    }
  }
}

function reset_board() {
  console.log("\x1B[2J");
}


let argv = process.argv;
let numOfPlayer = + argv[2];
let trackLength = + argv[3];

// var players = playerGenerator(numOfPlayer);
// console.log(advanced_player(players))
print_board(numOfPlayer, trackLength)
