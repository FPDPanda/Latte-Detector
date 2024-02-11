var latte = {
  selectedMilk: "",
  selectedEspresso: "",

  selectMilk(milk) {
    this.selectedMilk = milk;
    this.updateSummaryMessage();
  },
  selectEspresso(espresso) {
    this.selectedEspresso = espresso;
    this.updateSummaryMessage();
  },
  updateSummaryMessage() {
    const summary = document.getElementById("container__summary");
    if (summary) {
      summary.innerHTML = `Your latte has ${this.selectedMilk ?? ""}
      ${this.selectedMilk && this.selectedEspresso ? "and" : ""}
      ${this.selectedEspresso ?? ""}`;
    }
  },
  chocolate() {
    alert("If you add chocolate it won't be a latte!");
  }
};
