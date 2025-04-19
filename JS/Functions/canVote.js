/**
 * Write A Function
 * where pass the age of the user
 * and function should return true or false
 * if age is greater than 18 or equals to 18 then user can vote
 * otherwise return false means they can not vote
 *
 * function name : canVote
 * parameter name : age
 * returns : true / false
 *
 * example :
 *
 * canVote(18) // will return true
 * canVote(16) // will return true
 *
 */

function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let elegibleForVote = canVote(15);
console.log(elegibleForVote);

if (elegibleForVote) {
  console.log("you are available vote");
} else {
  console.log("you are not available for vote");
}

// check ig you can take a loan for Iphone

const isElegibleForLoan = canVote(18);
if (isElegibleForLoan) {
  console.log("Get a loan");
}
