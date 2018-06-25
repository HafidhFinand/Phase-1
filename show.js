const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');

class Show {

  static partyRWithGrade() {

    let query = `SELECT * FROM Politicians WHERE party = 'R' AND grade_current BETWEEN 9 AND 11`;

    db.all(query, (err, result) => {
      console.log(result);
    });
  }

  static totalVotesOlympiaSnowe(){
    
    let query = `SELECT Politicians.name, COUNT(*) AS 'totalVote' FROM Votes LEFT JOIN Politicians ON Votes.politician_id = Politicians.id WHERE Politicians.id = (SELECT id FROM Politicians WHERE name = 'Olympia Snowe')`;

    db.all(query, (err, result) => {
      console.log(result);
    });
  }

  static totalVotesAdam(){

    let query = `SELECT Politicians.name, COUNT(*) AS 'totalVote' FROM Votes LEFT JOIN Politicians ON Votes.politician_id = Politicians.id WHERE Politicians.name LIKE 'Adam%' GROUP BY Politicians.id`;

    db.all(query, (err, result) => {
      console.log(result);
    });
  }

  static top3HighestVotes(){

    let query = `SELECT Politicians.name, Politicians.party, Politicians.location, COUNT(*) AS 'totalVote' FROM Votes LEFT JOIN Politicians ON Votes.politician_id = Politicians.id GROUP BY Politicians.name ORDER BY totalVote DESC LIMIT 3`;

    db.all(query, (err, result) => {
      console.log(result);
    });
  }

  static olympiaSnoweVoters(){

    let query = `SELECT Voters.first_name, Voters.last_name, Voters.gender, Voters.age FROM Voters LEFT JOIN Votes ON Voters.id = Votes.voter_id WHERE Votes.politician_id = (SELECT id FROM Politicians WHERE name = "Olympia Snowe")`;

    db.all(query, (err, result) => {
      console.log(result);
    });
  }
}


// Show.partyRWithGrade()
// Show.totalVotesOlympiaSnowe()
// Show.totalVotesAdam()
// Show.top3HighestVotes()
Show.olympiaSnoweVoters()
