function randomNumber(min, max) {
    // This is a math expression for any kind of random number:
    /*
    Math.random() returns numbers between 0 and 1 (1 is not included)
    Example: It returns you 0.54344553
    Before that, you subtract "max - min"
    Then the result you add 1.
    Example: max - min + 1 = 3
    Then you multiply that number with the random number: 3 * 0.54344553
    Lastly: Sum with min (1) for example.
    */
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  // A function called choose:
  function choose(move)
  {
    let result = "";
    // For the player and PC.
    if(move == 1) 
    {
      result = "ROCK";
    } 
    else if (move == 2) 
    {
      result = "PAPER";
    } 
    else if (move == 3) 
    {
      result = "SCISSORS";
    } 
    else 
    {
      result = "LOOSER!";
    }
    return result;
  }
  // Function where the combat begins:
  // The 1 is for rock, the 2 is for paper, the 3 is for scissors:
  let player = 0;
  let computer = 0;
  let wins = 0;
  let looses = 0;
  let result = "";
  // We are going to use: While():
  while (wins < 3 && looses < 3)
  {
    // The player and the computer must choose again:
    computer = randomNumber(1, 3);
    // The player should choose one number:
    player = prompt("Choose: 1 for rock, 2 for paper, 3 for scissors.");
    // Using our function:
    alert("Computer choose: " + choose(computer));
    alert("You choose: " + choose(player));
    // CONDITIONALS:
    // The combat begins here:
    if (player == computer)
    {
      result = "A DRAW!";
    }
    else if (player == 1 && computer == 3)
    {
      wins = wins + 1;
    }
    else if (player == 2 && computer == 1)
    {
      wins = wins + 1;
    }
    else if (player == 3 && computer == 2)
    {
      wins = wins + 1;
    }
    else 
    {
      looses = looses + 1;
    }
  }
  alert("You win: " + wins + " and loose: " + looses);