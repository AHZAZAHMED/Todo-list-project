#! /usr/bin/env node 
import inquirer from "inquirer";

let list : string[] = [];
let condition = true;
while(condition){
let operation = await inquirer.prompt([
    {
        message : "What operation do you want to perform:",
        type : "list",
        name : "operationToChose",
        choices : ["add","delete","update","view","exit"]
    }
]);

if (operation.operationToChose === "add"){
    let addElement = await inquirer.prompt([
    {
        message : "Add item in the list:",
        type : "input",
        name : "element",
        validate : function (input) {
            if (input.trim() == ""){
                return "please give valid input."
            }
            return true;
        },
    }
]);
if(addElement.element.trim() !== ""){
list.push(addElement.element);
list.forEach(element => console.log(element)
)
};
}else if (operation.operationToChose === "delete"){
    let deleteList = await inquirer.prompt([
        {
            message : "What do you to update:",
            name : "deleteItem",
            type : "list",
            choices : list.map(item => item)
        }
]);
  let newList = list.filter(val => val !== deleteList.deleteItem);
  list = [...newList];
  list.forEach(element => console.log(element)
  )
  
} else if (operation.operationToChose === "update"){
        let updateList = await inquirer.prompt([
            {
                message : "What do you to update:",
                name : "updateItem",
                type : "list",
                choices : list.map(item => item)
            }
        ]);
        let addElement = await inquirer.prompt([
            {
                message : "Add item in the list:",
                type : "input",
                name : "element",
                validate : function(input){
                    if(input.trim() == ""){
                       return "please give valid input." 
                    }
                    return true;
                }
            }
        ]);
        if(addElement.element.trim() !== ""){
        let newList = list.filter(val => val !== updateList.updateItem);
        list = [...newList,addElement.element];
        list.forEach(element => console.log(element)
        )
        };

    }
        else if (operation.operationToChose === "view"){
            console.log("*********           *********");
            console.log("********* ToDo List *********");
            console.log("*********           *********");
            list.forEach(element => console.log(element))
            
        }
            else if (operation.operationToChose === "exit"){

            console.log("Exiting Todo list ...");
            condition = false;
            }
}