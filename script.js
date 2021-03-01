/* Saving all needed elements */

const educationValue = document.getElementById("education");
const familyValue = document.getElementById("family");
const skillsValue = document.getElementsByName("skills");
const ageValue = document.getElementsByName("radio");

/* ES6 arrow function */
const calculate = () => {
    /* declare of name variable */
    let name = document.getElementById("name").value;
    /* declare of price variable */
    let price = document.getElementById("bid").value;
    /* checking name and price for non empty */
    if(name !== null && price != 0){
        price = price * Number(educationValue.value);
        price = price * Number(familyValue.value);
        price = getSkillsValue(skillsValue, price);
        price = getAgeValue(ageValue, price);
        
        if(document.reputation.option[0].checked == true){
            price *= document.reputation.option[0].value;
        }
        if(document.reputation.option[1].checked == true){
            price *= document.reputation.option[1].value;
        }
        if(document.reputation.option[2].checked == true){
            price -= document.reputation.option[2].value;
        }

    let love_letter = document.getElementById("textarea").value;

    /* Saving everything in object*/

    let person = {
        bride_name: name,
        bride_price: price,
        letter: love_letter
    }

    document.getElementById("result").innerHTML = "The price for " + person.bride_name + "'s bride is " + person.bride_price + "$. Your love letter is " + person.letter;
    
    }
    /* in case of empty, display a alert */
    else{
        alert("Please, enter your name and starting price");
    }
}

/* Using of forEach method for multiplying price number with selected age coefficient */
const getAgeValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value);
        }
    })
    return price;
}

const getSkillsValue = (node_list, price) => {
    node_list.forEach(item => {
        if (item.checked) {
            price = price + Number(item.value);
        }
    })
    return price;
}

/* Add Event Listener*/

document.getElementById("calculate").addEventListener("click", function() {
    calculate();
});