window.onload = function(){
    const incomeInput = document.getElementById('income');
    const foodInput = document.getElementById('food');
    const rentInput = document.getElementById('rent');
    const clothesInput = document.getElementById('clothes');
    const calculateBtn = document.getElementById('calculate-btn');

    const ballanceOut = document.getElementById('ballance');
    const totalExpanceOut = document.getElementById('total-expance');

    const saveBtn = document.getElementById('save-btn');
    const savingsInput = document.getElementById('savings');
    const savingAmountOut = document.getElementById('saving-amount');
    const remainingBalanceOut = document.getElementById('remaining-balance');



    let income = 0,
        expence = 0,
        ballance = 0,
        savingParsent = 0,
        savings = 0,
        remainingBallance = 0;


    // Default
    incomeInput.focus();
    displayAllValue();

    // Calculate
    calculateBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        
        // Validate All Inputs
        if(validateInputs() == true){
            income = parseInt(incomeInput.value);
            expence = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothesInput.value);

            // Check Income Up To Expence
            if(income < expence){
                alert("Income Is Too Short");
            }else{
                ballance = income - expence;

                displayAllValue();
            }


        }else{
            console.log('no');
        }
    });

    // Savings
    saveBtn.addEventListener('click', function(){
        if(savingsInput.value == ''){
            alert("Saving Input Is Empty");
            savingsInput.focus();
        }else if(isNaN(savingsInput.value)){
            alert('Saving Input Is Not A Number');
            savingsInput.focus();
        }else{
            savingParsent = parseInt(savingsInput.value);
            savings = (income / 100) * savingParsent;

            if(ballance - savings < 0){
                alert('Income Is Too Short For Savings');
            }else{
                remainingBallance = ballance - savings;
                displayAllValue();
            }

            
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

    // Display All Value
    function displayAllValue(){
        ballanceOut.innerHTML = ballance;
        totalExpanceOut.innerHTML = expence;
        savingAmountOut.innerHTML = savings;
        remainingBalanceOut.innerHTML = remainingBallance;
    }



}