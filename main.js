window.onload = function(){
    const incomeInput = document.getElementById('income');
    const foodInput = document.getElementById('food');
    const rentInput = document.getElementById('rent');
    const clothesInput = document.getElementById('clothes');
    const calculateBtn = document.getElementById('calculate-btn');

    incomeInput.focus();

    calculateBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        
        // Validate All Inputs
        if(validateInputs() == true){
            console.log('ok');
        }else{
            console.log('no');
        }
    });





// Inputs Validation
function validateInputs(){
    if(incomeInput.value == ''){
        alert("Income Input Is Empty");
        incomeInput.focus();
    }else if(isNaN(incomeInput.value)){
        alert('Income Input Is Not A Number');
        incomeInput.focus();
    }
    else if(foodInput.value == ''){
        alert("Food Input Is Empty");
        foodInput.focus();
    }else if(isNaN(foodInput.value)){
        alert('Food Input Is Not A Number');
        foodInput.focus();
    }
    else if(rentInput.value == ''){
        alert("Rent Input Is Empty");
        rentInput.focus();
    }else if(isNaN(rentInput.value)){
        alert('Rent Input Is Not A Number');
        rentInput.focus();
    }
    else if(clothesInput.value == ''){
        alert("Clothes Input Is Empty");
        clothesInput.focus();
    }else if(isNaN(clothesInput.value)){
        alert('Clothes Input Is Not A Number');
        clothesInput.focus();
    }
    else{
        return true;
    }
}




}