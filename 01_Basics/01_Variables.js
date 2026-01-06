const account_Id = 25272
let account_Email = "jay@google.com"
var account_Password = "jay2580"
accountCity = "Jaipur"

/*
Prefer not to use var
because of issue in block functional scope
*/

account_Email = "jay@h.com"
account_Password = "2580"
accountCity = "jagatpura"

console.log(account_Id);
console.table([account_Id, account_Email, account_Password, accountCity])