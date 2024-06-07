var result=50;
if(result<0){
    console.log("failed");
}
else if(result>=0 && result<40){
    console.log("grade C");
}
else if(result>=40 && result<60){
    console.log("grade B");
}
else if(result>=60 && result<70){
    console.log("grade A-");
}
else if(result>=70 && result<80){
    console.log("grade A");
}
else if(result >=80 && result<=100){
    console.log("grade A+")
}
else{
    console.log("invalid");
}