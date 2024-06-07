let taka = [1000, 2000, 2500];
let cost = 5000;

let montlySavings = (pay,cost) => {

    if (!Array.isArray(pay) || typeof cost!=='number') {
        console.log("invalid Input");
        return;
    }
    
    let totalpaymet=0;
    pay.forEach(element=>{
        if (element>=3000) {
            element=element-(element*0.20);
        }
        totalpaymet=totalpaymet+element;
    });

    if (totalpaymet<cost) {
        console.log("Extra earn");
    } else {
        console.log(totalpaymet-cost);
    }
};

montlySavings(taka,cost);