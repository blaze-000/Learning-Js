const displayBox = document.querySelector('#display')

function appendNumber(number){
      displayBox.value += number;
}

function appendOperator(operator){
      // Prevent multiple operators in a row
      const lastChar = displayBox.value.slice(-1);
      if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/'){
            displayBox.value = displayBox.value.slice(0, -1); 
      }
      displayBox.value += operator;
}

function deleteLast(){
      if(displayBox.value.length === 0) return;
      if(displayBox.value === "Error"){
            displayBox.value = '';
            return;
      }
      displayBox.value = displayBox.value.slice(0, -1);
}

function resetCalculator(){
      displayBox.value = '';
}

function calculateResult(){
      try {
            displayBox.value = eval(displayBox.value);
      } catch (error) {
            displayBox.value = 'Error';
      }
}
