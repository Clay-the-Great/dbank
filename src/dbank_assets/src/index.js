import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function () {
    //console.log("Loading finished.");
    //const currentAmount = await dbank.checkBalance();
    //document.getElementById("value").innerText = currentAmount.toFixed(2);
    //document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

    updateBalance();

    document.querySelector("form").addEventListener("submit", async function (event) {
        event.preventDefault();
        console.log("Submitted");

        const button = event.target.querySelector("#submit-btn");
        button.setAttribute("disabled", true);

        const inputAmount = parseFloat(document.getElementById("input-amount").value);
        const withdrawalAmount = parseFloat(document.getElementById("withdrawal-amount").value);

        if(document.getElementById("input-amount").value.length){
            await dbank.topUp(inputAmount);
        }

        if(document.getElementById("withdrawal-amount").value.length){
            await dbank.withdraw(withdrawalAmount);
        }
        

        updateBalance();

        document.getElementById("input-amount").value = "";
        document.getElementById("withdrawal-amount").value = "";

        //dbank.compound();

        button.removeAttribute("disabled");

    });

    async function updateBalance(){
        const currentAmount = await dbank.checkBalance();
        document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
    }

})