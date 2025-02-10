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

const RemoveFromSavedIncome = (income) => {
  let localStorageData = GetSavedIncomeFromLocalStorage();
  let nameIndex = localStorageData.indexOf(income);
  localStorageData.splice(nameIndex, 1);
  localStorage.setItem("SavedIncome", JSON.stringify(localStorageData));
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

const RemoveFromSavedExpenses = (Expenses) => {
  let localStorageData = GetSavedExpensesFromLocalStorage();
  let nameIndex = localStorageData.indexOf(Expenses);
  localStorageData.splice(nameIndex, 1);
  localStorage.setItem("SavedExpenses", JSON.stringify(localStorageData));
};

export {
  SaveIncome,
  GetSavedIncomeFromLocalStorage,
  RemoveFromSavedIncome,
  SaveExpenses,
  GetSavedExpensesFromLocalStorage,
  RemoveFromSavedExpenses,
};
