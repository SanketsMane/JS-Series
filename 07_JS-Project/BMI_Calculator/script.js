const form = document.querySelector('form')
//this use case will give you empty values if you try to access the values before the form is submitted
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if(height === '' || height <=0 || isNaN(height)){
            results.innerHTML = 'Please Give A Valid Height'
    }

    if(weight === '' || weight <=0 || isNaN(weight)){
            results.innerHTML = 'Please Give A Valid Weight'
    }
    else{

    const bmi = `Your BMI is ${(weight / ((height * height) / 10000)).toFixed(2)}`


    //result  
    results.innerHTML = `<span>${bmi}<span>`
    }
})