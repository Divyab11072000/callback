/* Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result.
*/

function num(number){
    if(number>0){
        console.log("positive nuumbers");
        
    }
    else if(number<0){
        console.log("negative numbers");
        
    }
    else{
        console.log("Zero");
        
    }
}
num(-3);