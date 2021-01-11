// Precondition: none
// Postcondition: User entered amounts for amount, ratio, units, and subunits are calculated and placed
// into an array for processing later on
function getUnits() {
    let amount = 0;
    let ratio = 0;
    let units = "null";
    let subUnits = "null";

    amount = document.getElementById("Quantity").value;
    units = document.getElementById("units").value;
    ratio = document.getElementById("ratio").value;

    // if statement determines the value of "subUnits", which is what will be shown in the final display
    if (units == "gallons") {
        subUnits = "ounces";
    } else {
        subUnits = "milliliters";
    }

    // populating the array with values from variables
    unitsArray = [amount, units, ratio, subUnits];
    return unitsArray;
}

// Precondition: unitsArray is populated with values and passed to function
// Postcondition: Ratio is converted to the amount of oil in ounces per gallon for formula
function ratioGallons(unitsArray) {
    if (unitsArray[2] == 50) {
        unitsArray[2] = 2.6;
    }
    if (unitsArray[2] == 40) {
        unitsArray[2] = 3.2;
    }
    if (unitsArray[2] == 32) {
        unitsArray[2] = 4;
    }

    return unitsArray;
}

// Precondition: unitsArray is populated with values and passed to function
// Postcondition: Ratio is converted to the amount of oil in milliliters per liter for formula
function ratioLiters(unitsArray) {
    if (unitsArray[2] == 50) {
        unitsArray[2] = 20;
    }
    if (unitsArray[2] == 40) {
        unitsArray[2] = 25;
    }
    if (unitsArray[2] == 32) {
        unitsArray[2] = 31.25;
    }

    return unitsArray;
}




// Precondition: None
// Postcondition: Calls the functions needed to get the correct values, performs calculation, then displays response 
// under the calculator via innerHTML
function calculateMixture() {
    getUnits(); // Gets the units that are entered into the calculator, 
    // placing them into an array -> unitsArray[2]={amount, units, ratio}

    // Changes the value of 'ratio' to the correct amount per gallon/liter, specified by the unit being mixed
    // Gallons -> ounces, liters -> milliliters
    if (unitsArray[1] == 'gallons') {
        ratioGallons(unitsArray);
    } else {
        ratioLiters(unitsArray);
    }

    // Formula to determine number of ounces/ milliliters needed
    let finalAmount = (unitsArray[0] * unitsArray[2]);
    finalAmount = finalAmount.toFixed(1);

    // Removes the trailing "s" on either gallon(s) or liter(s) if only asking for one gallon or one liter by removing the last letter of the string
    if (unitsArray[0] == 1) {
        unitsArray[1] = unitsArray[1].substring(0, unitsArray[1].length - 1);
    }

    // Displays the final amount along with units and text in HTML document
    document.getElementById("display_box").innerHTML = "You need to add " + finalAmount + " " + unitsArray[3] + " of oil to make " + unitsArray[0] + " " + unitsArray[1];
}

// Precondition: None
// Postcondition: Webpage is refreshed, clearing entered information and information from previous calculations
function reset() {
    location.reload();
}