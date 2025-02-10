import {
    SaveIncome,
    GetSavedIncomeFromLocalStorage,
    RemoveFromSavedIncome,
    SaveExpenses,
    GetSavedExpensesFromLocalStorage,
    RemoveFromSavedExpenses,
  } from "./localStorage.js"

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

let budgetObject = {
    Title: "",
    Value: 0
}

addIncomeBtn.addEventListener('click', () => {
    Show(addIncomeModal);
});

closeAddIncomeBtn.addEventListener('click', () => {
    Hide(addIncomeModal);
})

addExpenseBtn.addEventListener('click', () => {
    Show(addExpenseModal);
});

closeAddExpenseBtn.addEventListener('click', () => {
    Hide(addExpenseModal);
})


const Show = (button) => {
    button.classList.remove('hidden')
}

const Hide = (button) => {
    button.classList.add('hidden')
}



// Income

confirmIncomeBtn.addEventListener('click', () => {
    if(incomeTitle.value.trim() !== '' && incomeValue.value.trim() !== ''){
        budgetObject.Title = incomeTitle.value;
        budgetObject.Value = incomeValue.value;
        console.log(budgetObject)
        SaveIncome(budgetObject)
        CreateIncomeList();
        Hide(addIncomeModal);
    }
})

const CreateIncomeList = () => {
    incomeList.innerHTML = ''
    let savedIncomeList = GetSavedIncomeFromLocalStorage();
    let incomeCounter = 0;

    savedIncomeList.map((incomes) => {
        let savedIncomeBox = document.createElement('div');
        savedIncomeBox.classList = "flex justify-between overflow-x-scroll w-[100%]"

        let div2 = document.createElement('div');
        div2.classList = "flex gap-2"

        let removeButton = document.createElement('button');
        removeButton.classList = "border-2 rounded-lg px-2"
        removeButton.innerText = "-"
        removeButton.addEventListener('click', function(){
            RemoveFromSavedIncome(incomes);
            savedIncomeBox.remove();
            CreateIncomeList()
        });


        let savedIncomeTitles = document.createElement('h1');
        savedIncomeTitles.innerText = incomes.Title;

        let savedIncomeValues = document.createElement('h1');
        savedIncomeValues.innerText = incomes.Value;
        incomeCounter += Number(incomes.Value)

        div2.appendChild(removeButton);
        div2.appendChild(savedIncomeTitles);
        savedIncomeBox.appendChild(div2);
        savedIncomeBox.appendChild(savedIncomeValues);

        incomeList.appendChild(savedIncomeBox)
    })

    totalIncome.innerText = incomeCounter.toFixed(2);
    totalIncome.classList.add("text-green-600");
    SetMyBudget();
}




// Expenses

confirmExpenseBtn.addEventListener('click', () => {
    if(expenseTitle.value.trim() !== '' && expenseValue.value.trim() !== ''){
        budgetObject.Title = expenseTitle.value;
        budgetObject.Value = expenseValue.value;
        console.log(budgetObject)
        SaveExpenses(budgetObject)
        CreateExpenseList();
        Hide(addExpenseModal);
    }
})

const CreateExpenseList = () => {
    expenseList.innerHTML = ''
    let savedExpenseList = GetSavedExpensesFromLocalStorage();
    let expenseCounter = 0;

    savedExpenseList.map((expenses) => {
        let savedExpenseBox = document.createElement('div');
        savedExpenseBox.classList = "flex justify-between overflow-x-scroll w-[100%]"

        let div2 = document.createElement('div');
        div2.classList = "flex gap-2"

        let removeButton = document.createElement('button');
        removeButton.classList = "border-2 rounded-lg px-2"
        removeButton.innerText = "-"
        removeButton.addEventListener('click', function(){
            RemoveFromSavedExpenses(expenses);
            savedExpenseBox.remove();
            CreateExpenseList()
        });


        let savedExpenseTitles = document.createElement('h1');
        savedExpenseTitles.innerText = expenses.Title;

        let savedExpenseValues = document.createElement('h1');
        savedExpenseValues.innerText = expenses.Value;
        expenseCounter += Number(expenses.Value)

        div2.appendChild(removeButton);
        div2.appendChild(savedExpenseTitles);
        savedExpenseBox.appendChild(div2);
        savedExpenseBox.appendChild(savedExpenseValues);

        expenseList.appendChild(savedExpenseBox)
    })
    expenseCounter *= -1;
    totalExpense.innerText = expenseCounter.toFixed(2);
    totalExpense.classList.add("text-red-600");
    SetMyBudget();
}


const SetMyBudget = () => {
    let total = Number(totalExpense.innerText)+Number(totalIncome.innerText);

    myBudget.innerText = total.toFixed(2);

    if(total > 0){
        myBudget.classList.add("text-green-600");
        myBudget.classList.remove("text-red-600");
    }else if(total < 0){
        myBudget.classList.add("text-red-600");
        myBudget.classList.remove("text-green-600");
    }else{
        myBudget.classList.remove("text-red-600");
        myBudget.classList.remove("text-green-600");
    }

    if(myBudget.innerText.length > 6){
        myBudget.classList.add("text-3xl")
        myBudget.classList.remove("text-5xl")
    }else{
        myBudget.classList.add("text-5xl")
        myBudget.classList.remove("text-3xl")
    }
}

CreateIncomeList();
CreateExpenseList();