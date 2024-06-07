let divisible_num=[];
for(let i=1;i<=50;i++){
    if(i%3==0){
        divisible_num.push(i);
    }
    if(i%5==0){
        divisible_num.push(i);
    }
}
for(let i=0;i<divisible_num.length;i++){
    console.log(divisible_num[i]);
}