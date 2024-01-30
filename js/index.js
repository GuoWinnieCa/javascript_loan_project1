const amountE1=document.querySelector("#amount");
const yearE1=document.querySelector("#year");
const rateE1=document.querySelector("#rate");
const payment1E1=document.querySelector("#payment1");
const payment2E1=document.querySelector("#payment2");
const feeE1=document.querySelector("#fee");

const calcE1=document.querySelector("#calc");
const resetE1=document.querySelector("#reset");

console.log(amountE1,yearE1,rateE1,payment1E1,payment2E1,feeE1,calcE1,resetE1)

calcE1.addEventListener("click",calcLoan);
function calcLoan(){
    // alert("click!");
    let amount=amountE1.value * 10000;
    let year=yearE1.value;
    let rate=rateE1.value / 100;
    // let fee=0;
    // if  (feeE1.checked){
    //     // console.log("5000");
    //     fee=5000;
    // }
    let fee=feeE1.checked ? 5000 : 0;
    // 取得不同計算方法
    let rule = payment1E1.checked ? 1:2;

    let totalInterest=amount * rate * year;
    let totalAmount=amount + totalInterest + fee;

    document.querySelector(".totalAmount").innerText = totalAmount + "元" + (fee == 0 ? "" : "(含手續費)");
    document.querySelector(".totalInterest").innerText = totalInterest + "元";
    const resultE1=document.querySelector("#result");
    resultE1.style.display = "none";
    setTimeout(function(){
        resultE1.style.display = "block";
    }, 1000);

    // setTimeout(change,1000);
    // function change(){
    //     resultE1.style.display = "block";
    // }

    

    console.log(amount,year,rate,fee, rule,totalAmount,totalInterest,resultE1);

    
}
