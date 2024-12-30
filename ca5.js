/* Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript */

function launchBrowser(browserName){
    if(browserName==="chrome"){
        return `hi,${browserName}`;
    }
    else{
        console.log(browserName);
        
    }
}
function runTests(testType){
    switch(testType){
        case "smoke":
            console.log("smoke");
            break;
        case "sanity":
            console.log("sanity");
            break;
        case 'regression':
            console.log("regression");
            break;
        default:
            console.log("default smoke");
            break;
                            
    }
}

launchBrowser("safari");
runTests();