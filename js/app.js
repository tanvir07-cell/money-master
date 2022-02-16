document.getElementById("calculate").addEventListener("click", function (e) {
  const income = document.getElementById("income");

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

  // clear the input fields:
  income.value = "";
  foodCostText.value = "";
  rentCostText.value = "";
  clothesCostText.value = "";
});
