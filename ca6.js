/* 1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.
*/
function getGrade(score){

    let grade;
    switch(score){
        case(score>=90):
        grade="A";
        break;

        case(score>=80):
        grade="B";
        break;

        case(score>=70):
        grade="C";
        break;

        case(score>=60):
        grade="D";
        break;

        case(score>=50):
        grade="E";
        break;

        case(score<50):
        grade="F";
        break;

        default:
        grade="invalid score";
        break;    
        
    }
    return grade;
}

console.log(getGrade(-20));

