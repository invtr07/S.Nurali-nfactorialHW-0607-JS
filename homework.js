// Чайная Далиды

let teacup = "Zhai-chai";
const price = 1500; 

let desserts = ["chai-emes", 1200];

const staff= {
     administrator: "Nureke",
     seller: "JordanB",
     salary: 500000
}

let queue= [[staff.administrator, "administrator"],["Dalida","owner"]]

if (queue.length<=1){
     console.log("Store is not busy");
     queue.push([staff.seller, "seller"])
} else{
     console.log("Sorry one of you have to leave ...");
     queue.pop(queue[0]||queue[1]);
     console.log(queue);
}

// need to add some exported function from another file that will do some output checkout of all clients currently being placed in the "queue" array 

