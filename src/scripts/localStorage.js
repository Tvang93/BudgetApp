const SaveIncome = (income) => {
  let incomeArr = GetSavedIncomeFromLocalStorage();
  if (!incomeArr.includes(income)) {
    incomeArr.push(income);
  }
  localStorage.setItem("SavedIncome", JSON.stringify(incomeArr));
};

const GetSavedIncomeFromLocalStorage = () => {
  let localStorageData = localStorage.getItem("SavedIncome");
  if (localStorageData == null) {
    return [];
  }
  return JSON.parse(localStorageData);
};

const RemoveFromSavedIncome = (incomeToRemove) => {
    let localStorageData = GetSavedIncomeFromLocalStorage();
    const updatedIncomes = localStorageData.filter(income => 
        income.Id !== incomeToRemove.Id
    );
    localStorage.setItem("SavedIncome", JSON.stringify(updatedIncomes));
};

const SaveExpenses = (Expenses) => {
  let ExpensesArr = GetSavedExpensesFromLocalStorage();
  if (!ExpensesArr.includes(Expenses)) {
    ExpensesArr.push(Expenses);
  }
  localStorage.setItem("SavedExpenses", JSON.stringify(ExpensesArr));
};

const GetSavedExpensesFromLocalStorage = () => {
  let localStorageData = localStorage.getItem("SavedExpenses");
  if (localStorageData == null) {
    return [];
  }
  return JSON.parse(localStorageData);
};

const RemoveFromSavedExpenses = (expenseToRemove) => {
    let localStorageData = GetSavedExpensesFromLocalStorage();
    const updatedExpenses = localStorageData.filter(expense => 
        expense.Id !== expenseToRemove.Id
    );
    localStorage.setItem("SavedExpenses", JSON.stringify(updatedExpenses));
};

export {
  SaveIncome,
  GetSavedIncomeFromLocalStorage,
  RemoveFromSavedIncome,
  SaveExpenses,
  GetSavedExpensesFromLocalStorage,
  RemoveFromSavedExpenses,
};
