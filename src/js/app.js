const getFizzBuzzValue = function(number){
    if(number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz";
    }
    else if(number % 3 === 0){
        return "Fizz";
    }
    else if(number % 5 === 0){
        return "Buzz";
    }
    return number.toString();
}

const inputBoxElement = document.querySelector('#inputBox');
const resultContainerElement = document.querySelector('#resultContainer');

const resultButtonElement = document.querySelector('#resultButton');
resultButtonElement.addEventListener("click", () => {
    resultContainerElement.innerHTML = getFizzBuzzValue(inputBoxElement.value);
})

// resultButtonElement.addEventListener("click", function(){
//     resultContainerElement.innerHTML = getFizzBuzzValue(inputBoxElement.value);
// })
