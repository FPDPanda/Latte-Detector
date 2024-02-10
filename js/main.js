function selectedMilk(milk) {
    if (milk === "dairyMilk") {
        return alert('You have added dairy milk!')
    }
    else if (milk === "soyMilk") {
        return alert('You have added soy milk!')
    }
    else {
    return alert('You have added cream!')
    }
}

function selectedEspresso(espresso) {
    if (espresso === 'caffeinatedEspresso'){
        return alert("You have added caffeinated espresso!")
    }
    return alert("You have added decaf espresso!")
}

function chocolate(){
    return alert("If you add chocolate it won't be a latte!")
}