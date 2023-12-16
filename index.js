const money = prompt("Ваш бюджет на месяц?", "0");
const time = prompt("Введите дату в формате YYYY-MM-DD");

const answer1 = prompt("Введите обязательную статью расходов в этом месяце");
const answer2 = prompt("Во сколько обойдется?");

expenses = {
  answer1: answer2,
};

const appData = {
  budget: money,
  timeData: time,
  expenses: "",
  optionalExpenses: "",
  income: "",
  savings: false,
};

alert("Бюджет на 1 день:" + money / 30);