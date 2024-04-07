import inquirer from "inquirer";
let currency:any={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
}
let answers=await inquirer.prompt([
    {
    name:"from",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR"],
    message:"Enter your currency!!",
    },
    {
    name:"to",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR"],
    message:"Enter to currency!!",
    },
    {
        name:"Amount",
        message:"Enter your Amount please!!",
        type:"number",
    },
])
let fromAmount=currency[answers.from];
let toAmount=currency[answers.to];
let amount=answers.Amount;
let baseCurrency=amount / fromAmount;
let convertCurrency=baseCurrency*toAmount;
console.log(convertCurrency)
