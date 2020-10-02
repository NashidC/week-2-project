function fight() {
  let monsterName = prompt("What would you like to name your monster?");
  let heroName = prompt("What would you like to name your hero?");

  let villainHealth = 50;
  let heroHealth = 50;

  let i = 1;

  while (villainHealth > 0 && heroHealth > 0) {
    let heroRoll = Math.floor(Math.random() * 20 + 1); //1
    let villainRoll = Math.floor(Math.random() * 20 + 1); //2

    if (i % 2 === 0) {
      //odds
      if (villainRoll === 1 || villainRoll === 2) {
        villainHealth -= 5;

        alert(`Critical failure! ${monsterName} accidentally stabs self!`);
        alert(
          `${heroName} has ${heroHealth} hitpoints left. ${monsterName} has ${villainHealth} hitpoints left.`
        );
      } else if (villainRoll >= 3 && villainRoll <= 10) {
        heroHealth -= 0;

        alert(`${monsterName} misses!`);
        alert(
          `${heroName} has ${heroHealth} hitpoints left. ${monsterName} has ${villainHealth} hitpoints left.`
        );
      } else if (villainRoll >= 11 && villainRoll <= 18) {
        heroHealth -= 10;

        alert(`Hit! ${monsterName} strikes ${heroName}!`);
        alert(
          `${heroName} has ${heroHealth} hitpoints left. ${monsterName} has ${villainHealth} hitpoints left.`
        );
      } else {
        heroHealth -= 20;

        alert(`Critical hit! ${monsterName} does double damage!`);
        alert(
          `${heroName} has ${heroHealth} hitpoints left. ${monsterName} has ${villainHealth} hitpoints left.`
        );
      }
    } else {
      if (heroRoll === 1 || heroRoll === 2) {
        heroHealth -= 5;

        alert(`Critical failure! ${heroName} accidentally stabs self!`);
      } else if (heroRoll >= 3 && heroRoll <= 10) {
        villainHealth -= 0;

        alert(`${heroName} misses!`);
      } else if (heroRoll >= 11 && heroRoll <= 18) {
        villainHealth -= 10;
        alert(`Hit! ${heroName} strikes ${monsterName}!`);
      } else {
        villainHealth -= 20;
        alert(`Critical hit! ${heroName} does double damage!`);
      }
    }

    i++;
  }
  if (villainHealth <= 0 && heroHealth <= 0) {
    alert(`Both ${heroName} & ${monsterName} loses`);
  } else if (villainHealth < heroHealth) {
    alert(`${heroName} wins`);
  } else {
    alert(`${monsterName} wins`);
  }

  let answer = prompt("Would you like to play again? Type 'yes' or 'no'");

  if (answer === "yes") {
    fight();
  } else if (answer === "no") {
    alert(`Thank you for playing the game!`);
  } else {
    answer = prompt("Invalid input, type 'yes' or 'no'");
  }
}
fight();