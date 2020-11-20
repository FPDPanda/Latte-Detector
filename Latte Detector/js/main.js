//Aqui ficam as mensagems (o que acontece quando se clica no botão)
//A função "onclick" do HTML chama uma função dessas

// Mensagem falando "Você adicionou leite x"
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

// Mensagem falando "Você adicionou espresso x"
function selectedEspresso(espresso) {
    if (espresso === 'caffeinatedEspresso'){
        return alert("You have added caffeinated espresso!")
    }
    return alert("You have added decaf espresso!")
}

// Mensagem falanto que "Se você adicionar chocolate não vai mais ser um latte!"
function chocolate(){
    return alert("If you add chocolate it won't be a latte!")
}