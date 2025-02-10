const totalIncome = document.getElementById("totalIncome");
const incomeList = document.getElementById("incomeList");
const addIncomeBtn = document.getElementById("addIncomeBtn");
const totalExpense = document.getElementById("totalExpense");
const expenseList = document.getElementById("expenseList");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const myBudget = document.getElementById("myBudget");

const addIncomeModal = document.getElementById("addIncomeModal");
const closeAddIncomeBtn = document.getElementById("closeAddIncomeBtn");
const incomeTitle = document.getElementById("incomeTitle");
const incomeValue = document.getElementById("incomeValue");
const confirmIncomeBtn = document.getElementById("confirmIncomeBtn");

const addExpenseModal = document.getElementById("addExpenseModal");
const closeAddExpenseBtn = document.getElementById("closeAddExpenseBtn");
const expenseTitle = document.getElementById("expenseTitle");
const expenseValue = document.getElementById("expenseValue");
const confirmExpenseBtn = document.getElementById("confirmExpenseBtn");




addIncomeBtn.addEventListener('click', () => {
    Show(addIncomeModal);
    console.log("buton works")
});

closeAddIncomeBtn.addEventListener('click', () => {
    Hide(addIncomeModal);
    console.log("button works")
})

addExpenseBtn.addEventListener('click', () => {
    Show(addExpenseModal);
    console.log("buton works")
});

closeAddExpenseBtn.addEventListener('click', () => {
    Hide(addExpenseModal);
    console.log("button works")
})


const Show = (button) => {
    button.classList.remove('hidden')
}

const Hide = (button) => {
    button.classList.add('hidden')
}