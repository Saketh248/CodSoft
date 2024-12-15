const display = document.getElementById('display');
 let output = '';
 const appendText = (text) => {
 output += text;
 display.value = output;
 };
 const clearDisplay = () => {
 output = '';
 display.value = '';
 };
 const calculate = () => {
 try {
 const result = eval(output);
 display.value = result;
 output = result.toString();
 } catch (error) {
 display.value = 'Error';
 output = '';
 }
 };