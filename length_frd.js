
const length=(array)=>{
   let len=array[0];
    for(let i=0;i<array.length;i++){
        const element=array[i];
        if(element.length>len.length){
            len=array[i];
        }
    }
    return len;
}



var friends=["rahim","karim","abdul","sadsd","heroalom"];
const bigfriends=length(friends);
console.log(bigfriends);