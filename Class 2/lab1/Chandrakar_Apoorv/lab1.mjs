export const questionOne = (arr) => {
  let sum = 0;
  for(let item of arr) sum += Math.pow(item, 3);

  let result = {};
  result[sum] = false;
  if(sum <= 1) return result;
  
  for(let i = 2; i <= Math.sqrt(sum); i++) if (sum % i === 0) return result;

  result[sum] = true;
  return result;
};


export const questionTwo = (numArray) => {
  let result = [true]
  for(let i=0; i<numArray.length-1; i++){
    if(numArray[i] > numArray[i+1]){
      result[0] = false;
      result.push(i);
      result.push(i+1);
      break;
    }
  }
  return result;
};


export const questionThree = (obj1, obj2) => {
  let result = {};
  for(let key1 in obj1) result[key1] = key1 in obj2? true : false;
  for(let key2 in obj2) if(!(key2 in result)) result[key2] = false;
  return result;
};


export const questionFour = (string) => {
  let result = [];
  let linesArray = string.split("\n");
  for(let line of linesArray) result.push(line.split(","));
  return result;
};


export const studentInfo = {
  firstName: 'Apoorv',
  lastName: 'Chandrakar',
  studentId: '20015515'
};