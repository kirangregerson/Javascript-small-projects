                 
function getVeggies(runningTotal,text1) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("veggies");
    for (var j = 0; j < vegArray.length; j++) {
        if (vegArray[j].checked) {
            selectedVeg.push(vegArray[j].value);
            console.log("selected veggie item: ("+vegArray[j].value+")");
            text1 = text1+vegArray[j].value+"<br>";
        }
    }
    var vegCount = selectedVeg.length;
    if (vegCount > 1) {
        vegTotal = (vegCount - 1);
    } else {
        vegTotal = 0;
    }
    runningTotal = (runningTotal + vegTotal);
    console.log("total selected veggie items: "+vegCount);
    console.log(vegCount+" veg - 1 free veg = "+"$"+vegTotal+".00");
    console.log("veg text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	

function getMeat(runningTotal,text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: "+meatCount);
    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    getVeggies(runningTotal,text1);
};	

function getReceipt() {
    // This initializes our string so it can get passed from  
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    //pizza size cost calculation
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //end pizza size cost calculation

    //cheese cost calculation
    for (var i = 0; i < cheeseArray.length; i++) {
        if (cheeseArray[i].checked) {
            var selectedCheese = cheeseArray[i].value;
            text1 = text1+selectedCheese+" Cheese"+"<br>";
        }
    }
    if (selectedCheese === "None") {
        cheeseTotal = 0;
    } else if (selectedCheese === "Regular") {
        cheeseTotal = 0;
    } else if (selectedCheese === "Extra") {
        cheeseTotal = 3;
    }
    //end cheese cost calculation

    //crust cost calculation
    for (var i = 0; i < crustArray.length; i++) {
        if (crustArray[i].checked) {
            var selectedCrust = crustArray[i].value;
            text1 = text1+selectedCrust+"<br>";
        }
    }
    if (selectedCrust === "Plain Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "Garlic Butter Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "Cheese Stuffed Crust") {
        crustTotal = 3;
    } else if (selectedCrust === "Spicy Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "House Special Crust") {
        crustTotal = 0;
    }
    //end crust cost calculation

    runningTotal = sizeTotal + cheeseTotal + crustTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);

    console.log(selectedCheese+" = $"+cheeseTotal+".00");
    console.log("cheese text1: "+text1);

    console.log(selectedCrust+" = $"+crustTotal+".00");
    console.log("crust text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    
    getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
    

};