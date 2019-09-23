module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
      return false;
  }

  let openBr = [];
  let closeBr = [];
  let stack = [];
  const procStr = str.split('');
  
  bracketsConfig.map(item => {
    openBr.push(item[0]);
    closeBr.push(item[1]);
  });

  procStr.forEach(element => {
    if (closeBr.includes(element) && stack.length === 0 && element !== '|') {
      stack.push('false');
    } else if (closeBr.includes(element) && openBr.indexOf(stack[stack.length - 1]) === closeBr.indexOf(element)) {
      stack.pop();
    } else if (openBr.includes(element)) {
      stack.push(element);
    } 
  });

  if (stack.length === 0) {
      return true;
    } else return false;
}
