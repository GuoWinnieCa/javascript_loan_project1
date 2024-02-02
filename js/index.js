const amountE1 = document.querySelector("#amount");
const yearE1 = document.querySelector("#year");
const rateE1 = document.querySelector("#rate");
const payment1E1 = document.querySelector("#payment1");
const payment2E1 = document.querySelector("#payment2");
const feeE1 = document.querySelector("#fee");
const calcE1 = document.querySelector("#calc");
const tableE1 = document.querySelector("#table tbody");

const resetE1 = document.querySelector("#reset");

console.log(tableE1,amountE1, yearE1, rateE1, payment1E1, payment2E1, feeE1, calcE1, resetE1)

calcE1.addEventListener("click", calcLoan);
function calcLoan() {
    // alert("click!");
    let amount = amountE1.value * 10000;
    let year = yearE1.value;
    let rate = rateE1.value;
    // let fee=0;
    // if  (feeE1.checked){
    //     // console.log("5000");
    //     fee=5000;
    // }
    let fee = feeE1.checked ? 5000 : 0;
    // 取得不同計算方法
    let rule = payment1E1.checked ? 1 : 2;

    // let totalInterest = amount * rate * year;
    // let totalAmount = amount + totalInterest + fee;

    // console.log(amount, year, rate, fee, rule, totalAmount, totalInterest);
    
    let result;
    if (rule == 1) {
        result = rule1(amount, year, rate);
        console.log(result);
    } else {
        // console.log(result);
        alert("功能製作中...");
        return;
    }

    let totalInterest = result[1];
    let totalAmount = amount + totalInterest + fee;
    console.log(amount, year, rate, fee, rule, totalAmount, totalInterest);
    
    document.querySelector(".totalAmount").innerText = totalAmount + "元" + (fee == 0 ? "" : "(含手續費)");
    document.querySelector(".totalInterest").innerText = totalInterest + "元";
    const resultE1 = document.querySelector("#result");
    resultE1.style.display = "none";
    setTimeout(function () {
        resultE1.style.display = "block";
    }, 1000);

    // setTimeout(change,1000);
    // function change(){
    //     resultE1.style.display = "block";
    // }
    // console.log(amount,year,rate,fee, rule,totalAmount,totalInterest,resultE1);
    drawTable(result[0]);
}

function drawTable(datas){
    let tableStr = "";
    for(let i = 0; i<datas.length;i++){
        tableStr += "<tr>"
        for(let j =0; j<datas[i].length;j++){
            // console.log(datas[i][j]);
            tableStr+=`<td>${datas[i][j]}</td>`;
        }
        tableStr += "</tr>";
    }
    tableE1.innerHTML=tableStr;

    // let tableStr = "<ul>";
    // for(let i=0; i<datas.length; i++){
    //     console.log(datas[i].join(","));
    //     tableStr += `<li>${datas[i].join(",")}</li>`;
    // }
    // tableStr += "</ul>";
    // console.log(tableStr);
    // tableE1.innerHTML=tableStr;
}

function rule1(total_amount, year, rate) {
    let amount = total_amount;
    let period = year * 12;
    let month_rate = rate / 100 / 12;
    let month_pay = parseInt(amount / period);

    let totalInterest = 0;
    let datas = [];
    for (let i=0; i < period; i++) {
        interest = Math.round(amount * month_rate);
        amount -= month_pay;
        // #最後一期?
        if (i == period - 1) {
            datas.push([i + 1, month_pay + amount, interest, month_pay + amount + interest, 0]);
        }
        else {
            datas.push([i + 1, month_pay, interest, month_pay + interest, amount]);
        }
        totalInterest += interest;

    }
    console.log(datas);
    return [datas, totalInterest];
}