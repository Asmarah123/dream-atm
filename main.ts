#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;

let myPin = 4040;


let pinAnswer = await inquirer.prompt(
    [
    {
       name : "pin",
       message : "enter your pin",
       type : "number"
  }
]
);

if(pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");
    


let operationAns = await inquirer.prompt(
    [
        {
            name : "operation",
            message :"please select option",
            type : "list",
            choices : ["withdraw" , "check balance"]
        }
    ]
)

console.log(operationAns);


let fastCash = await inquirer.prompt(
    [
        {
            name : "amount",
            message : "select your amount",
            type : "list",
            choices : [ 500, 10000, 20000, 5000]
            
        }
    ]

    )

    console.log(fastCash)


if(operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name : "amount",
                message : "enter your amount",
                type : "number"
            }
        ]
    )
  
    myBalance -= amountAns.amount;
    console.log(`Your remaining balance is: ${myBalance}`);


    }else if (operationAns.operation === "check balance"){
        console.log(`your balance is: ${myBalance}`);
        
    } 
}
    else {
        console.log("Incorrect pin number");
        
    }
