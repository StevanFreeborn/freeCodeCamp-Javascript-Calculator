// initially working through logic for each
// button in separate functions.

function clearDisplay(){
    $("#intermediateDisplay").html("0");
    $("#display").html("0");
}

function addZeroToDisplay(button) {
    let secondaryDisplayValue = $("#display").html().trim();
    let displayValue = $("#intermediateDisplay").html().trim();

    if(secondaryDisplayValue == "0") return;

    $("#intermediateDisplay").html(displayValue + button.value);
    $("#display").html(secondaryDisplayValue + button.value);
}

function addDecimalToDisplay(button) {
    let secondaryDisplayValue = $("#display").html().trim();
    let displayValue = $("#intermediateDisplay").html().trim();

    if(displayValue.indexOf(".") != -1) return;

    $("#intermediateDisplay").html(displayValue + button.value);
    $("#display").html(secondaryDisplayValue + button.value);
}

function addNumberToDisplay(button) {
    let secondaryDisplayValue = $("#display").html().trim();
    let lastValueEntered = secondaryDisplayValue.slice(secondaryDisplayValue.length - 1);
    let displayValue = $("#intermediateDisplay").html().trim();

    if(secondaryDisplayValue == "0") 
    {
        $("#intermediateDisplay").html(button.value);
        $("#display").html(button.value);
        return;
    }

    if(lastValueEntered.match(/[/*+-]/))
    {
        $("#intermediateDisplay").html(button.value);
        $("#display").html(secondaryDisplayValue + button.value);
        return;
    }
    
    $("#intermediateDisplay").html(displayValue + button.value);
    $("#display").html(secondaryDisplayValue + button.value);
}

function addOperatorToDisplay(button) {
    let secondaryDisplayValue = $("#display").html().trim();
    let lastTwoValuesEntered = secondaryDisplayValue.slice(secondaryDisplayValue.length - 2);
    let lastValueEntered = lastTwoValuesEntered.slice(lastTwoValuesEntered.length - 1);
    let secondToLastValueEntered = lastTwoValuesEntered.slice(0, lastTwoValuesEntered.length - 1);

    if(lastTwoValuesEntered == "--" && button.value =="-") return;
    
    if(lastValueEntered.match(/\d/))
    {
        $("#intermediateDisplay").html(button.value);
        $("#display").html(secondaryDisplayValue + button.value);
        return;
    }

    if (button.value == "-") 
    {
        $("#intermediateDisplay").html(button.value);
        $("#display").html(secondaryDisplayValue + button.value);
        return;
    }

    if(lastValueEntered.match(/[/*+-]/) && secondToLastValueEntered.match(/[/*+-]/))
    {
        secondaryDisplayValue = secondaryDisplayValue.slice(0, secondaryDisplayValue.length - 2);
        $("#intermediateDisplay").html(button.value);
        $("#display").html(secondaryDisplayValue + button.value);
        return;
    }

    secondaryDisplayValue = secondaryDisplayValue.slice(0, secondaryDisplayValue.length - 1);
    $("#intermediateDisplay").html(button.value);
    $("#display").html(secondaryDisplayValue + button.value);
}

function calculate(button) {
    let secondaryDisplayValue = $("#display").html().trim();
    let result = eval(secondaryDisplayValue);
    $("#intermediateDisplay").html(button.value);
    $("#display").html(result);
}