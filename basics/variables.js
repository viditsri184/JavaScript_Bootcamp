const accountId = 12341;
let accountEmail = "vidit@google.com";
var accountPassword = "12345"
accountCity = "Jaipur";

//accountId = 2 // not allowed

accountEmail = "vs@vs.com";
accountPassword = "21212121"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/*
prefer not to use var
Reason : issue in block scope and functional scope
 */



console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);