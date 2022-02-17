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

  // for checking when user input the negative value:
  if (income.value > 0 && clothesCostTextValue > 0 && rentCostTextValue > 0) {
    //   totalExpense:
    const totalExpenses = document.getElementById("total-expenses");
    const totalExpensesValue =
      foodCostAmount + rentCostAmount + clothesCostAmount;

    totalExpenses.textContent = totalExpensesValue;

    //   totalBalance:

    const totalBalance = document.getElementById("total-balance");

    totalBalance.textContent =
      parseFloat(income.value) - totalExpenses.textContent;

    if (totalExpensesValue > income.value) {
      alert(
        `You have ${income.value}!  so you don't expense ${totalExpenses.textContent}`
      );
      totalExpenses.textContent = "";
      totalBalance.textContent = "";
    }

    return totalBalance.textContent;
  }
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
  const savingAmountValue = parseFloat(income.value) * (saveAmountValue / 100);
  savingAmount.textContent = savingAmountValue;

  // for accessing totalBalance.textContent: using this totalBalanceAmount variable:

  const totalBalanceAmount = getInputValue();
  // remaining balance:

  const remainingBalance = document.getElementById("remaining-balance");

  remainingBalance.textContent = totalBalanceAmount - savingAmount.textContent;

  // checking if totalBalance is less then the saving balance:

  if (totalBalanceAmount < savingAmountValue) {
    alert(
      `You have less then ${savingAmount.textContent} ! so, you dont't save amount ${saveAmountText}% `
    );
    savingAmount.textContent = "";
    remainingBalance.textContent = "";
  }
});
