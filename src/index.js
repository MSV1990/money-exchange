
module.exports = function makeExchange(currency) {
    if(currency <= 0) return {};
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    let coins =  {"H":0,"Q":0,"D":0,"N":0,"P":0};
    while(currency>=50){
        coins.H++;
      currency -= 50;
    };
     while(currency>=25){
        coins.Q++;
      currency -= 25;
    };
     while(currency>=10){
        coins.D++;
      currency -= 10;
    };
     while(currency>=5){
        coins.N++;
      currency -= 5;
    };
     while(currency>=1){
        coins.P++;
      currency -= 1;
    };
  
    for(let money in coins){
        if(coins[money] == 0) delete coins[money]; 
    }
  
    return coins;
  }
       
