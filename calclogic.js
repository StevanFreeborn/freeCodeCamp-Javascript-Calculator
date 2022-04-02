// logic refactored to single function
// to handle the click of any button.

function handleClick(button)
{
    let displayValue = $("#display").html().trim();
    let intermediateValue = $("#intermediateDisplay").html().trim();
    let lastTwoValuesEntered = displayValue.slice(displayValue.length - 2);
    let lastValueEntered = lastTwoValuesEntered.slice(lastTwoValuesEntered.length - 1);
    let secondToLastValueEntered = lastTwoValuesEntered.slice(0, lastTwoValuesEntered.length - 1);
    
    switch (button.value) {

        // clear
        case "AC":
            $("#intermediateDisplay").html("0");
            $("#display").html("0");
            break;

        // zero
        case "0":
            if(displayValue == "0") return;
            $("#intermediateDisplay").html(displayValue + button.value);
            $("#display").html(displayValue + button.value);
            break;

        // decimal
        case ".":
            if(intermediateValue.indexOf(".") != -1) return;
            $("#intermediateDisplay").html(displayValue + button.value);
            $("#display").html(displayValue + button.value);
            break;
        
        // non-zero numbers    
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if(displayValue == "0") 
            {
                $("#intermediateDisplay").html(button.value);
                $("#display").html(button.value);
                return;
            }

            if(lastValueEntered.match(/[/*+-]/))
            {
                $("#intermediateDisplay").html(button.value);
                $("#display").html(displayValue + button.value);
                return;
            }

            if(intermediateValue == "=")
            {
                $("#intermediateDisplay").html(button.value);
                $("#display").html(button.value);
                return;
            }

            $("#intermediateDisplay").html(intermediateValue + button.value);
            $("#display").html(displayValue + button.value);
            break;

        // operators    
        case "+":
        case "/":
        case "-":
        case "*":
            if(lastTwoValuesEntered == "--" && button.value =="-") return;

            if(lastValueEntered.match(/\d/))
            {
                $("#intermediateDisplay").html(button.value);
                $("#display").html(displayValue + button.value);
                return;
            }

            if (button.value == "-") 
            {
                $("#intermediateDisplay").html(button.value);
                $("#display").html(displayValue + button.value);
                return;
            }

            if(lastValueEntered.match(/[/*+-]/) && secondToLastValueEntered.match(/[/*+-]/))
            {
                displayValue = displayValue.slice(0, displayValue.length - 2);
                $("#intermediateDisplay").html(button.value);
                $("#display").html(displayValue + button.value);
                return;
            }

            displayValue = displayValue.slice(0, displayValue.length - 1);
            $("#intermediateDisplay").html(button.value);
            $("#display").html(displayValue + button.value);
            break;
        
        // equals
        case "=":
            if(lastValueEntered.match(/[/*+-]/)) return;
            let result = eval(displayValue);
            $("#intermediateDisplay").html(button.value);
            $("#display").html(result);
            break;
        default:
            break;
    }
}