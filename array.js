newArray = [1, 2, 3]; // any element can be defined in an array
const testArray = [4, 5, 6];

function transform(numArray){
      return numArray.map(item => {
            return {val: item}
      })
}

const transformedArray = transform([1,2,3,4,5]);
console.log(transformedArray);



//some of the methods of array
newArray.push("New Element"); // adds an element to the end of the array
newArray.pop(); // removes the last element of the array
newArray.unshift("New Element at start"); // adds an element to the start of the array
newArray.shift(); // removes the first element of the array

//when need to add another array,
newArray.push([1, 2, 3]); // adds an array to the end of the array

//when need to add another but as a single element - we use spread operator

const anotherArray = [...newArray, ...testArray];

console.log(anotherArray);

const another_array = [1, 2, 3, [4, 5, 6], true, false, [7, [1, 2, 3]]];

// converts an array-like object to an array
