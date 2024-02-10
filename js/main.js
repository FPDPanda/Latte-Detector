var latte = {
    selectedMilk: "",
    selectedEspresso: "",

    selectMilk(milk) {
        this.selectedMilk = milk;

        alert(`You have added ${milk}!`);
    },    
    selectEspresso(espresso) {
        this.selectedEspresso = espresso;

        alert(`You have added ${espresso}!`);
    },    
    chocolate() {
        alert("If you add chocolate it won't be a latte!")
    }
}