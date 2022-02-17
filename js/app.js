function getInputValue() {
  //for expenses:
  const foodCostText = document.getElementById("food");

  const foodCostTextValue = foodCostText.value;

  const foodCostAmount = parseFloat(foodCostTextValue);

  const rentCostText = document.getElementById("rent");
  const rentCostTextValue = rentCostText.value;

  const rentCostAmount = parseFloat(rentCostTextValue);

  const clothesCostText = document.getElementById("clothes");

  const clothesCostTextValue = clothesCostText.value;
  const clothesCostAmount = parseFloat(clothesCostTextValue);

  //   totalExpense:
  const totalExpenses = document.getElementById("total-expenses");

  totalExpenses.textContent =
    foodCostAmount + rentCostAmount + clothesCostAmount;

  //   totalBalance:
  const totalBalance = document.getElementById("total-balance");
  totalBalance.textContent =
    parseFloat(income.value) - totalExpenses.textContent;

  return totalBalance.textContent;
}

// for calculating expenses and income:

document.getElementById("calculate").addEventListener("click", function (e) {
  const income = document.getElementById("income");
  getInputValue();
});

// for saving:

document.getElementById("save-btn").addEventListener("click", function () {
  const save = document.getElementById("save");
  const saveAmountText = save.value;
  const saveAmountValue = parseFloat(saveAmountText);

  //   set the savingAmount:

  const savingAmount = document.getElementById("saving-amount");
  savingAmount.textContent = parseFloat(income.value) * (saveAmountValue / 100);

  // for accessing totalBalance.textContent: using this totalBalanceAmount variable:

  const totalBalanceAmount = getInputValue();

  // remaining balance:

  const remainingBalance = document.getElementById("remaining-balance");

  remainingBalance.textContent = totalBalanceAmount - savingAmount.textContent;
});
