//for loop 

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best number");
    }
    console.log(element)
}


//for inside for loop 

for(let i = 0; i<5 ; i++){
    //outer loop

    for(let j=0;j<=i; j++)
    {
        console.log("*")
    }
}