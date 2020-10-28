let num: number = 1;

while (num < 100) {
  let output: string = "";
  if(num%3 === 0) {
    output += "Fizz";
  }
  if(num%5 === 0) {
    output += "Buzz";
  }
  if(output === "") {
    output += num.toString();
  }
  console.log(output);
  num++;
}