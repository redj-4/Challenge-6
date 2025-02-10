//Task 1: Function Declaration 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
  }   //function declaration for calculating total profit

  // Test Data:
calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"

//Task 2: Function Expression 
const calculateSalesTax = function(amount, taxRate) {
  const salesTax = amount * taxRate;
  console.log(`Sales Tax: $${salesTax}`);
};    // Declare a function expression for calculating sales tax

// Test Data:
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"

//Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
  let bonusPercentage = 0;
  
  switch (performanceRating) {
    case "Excellent":
      bonusPercentage = 0.20;
      break;
    case "Good":
      bonusPercentage = 0.10;
      break;
    case "Average":
      bonusPercentage = 0.05;
      break;
    default:
      bonusPercentage = 0;
  }
  
  const bonus = salary * bonusPercentage;
  return `Bonus: $${bonus}`;
};

// Test Data
console.log(calculateBonus(5000, "Excellent")); // Expected output: "Bonus: $1000"
console.log(calculateBonus(7000, "Good"));      // Expected output: "Bonus: $700"

//Task 4: Parameters and Arguements 
const calculateSubscriptionCost = (plan, months, discount = 0) => {
  let costPerMonth = 0;

  switch (plan) {
    case "Basic":
      costPerMonth = 10;
      break;
    case "Premium":
      costPerMonth = 20;
      break;
    case "Enterprise":
      costPerMonth = 50;
      break;
    default:
      return "Invalid plan";
  }

  const totalCost = costPerMonth * months - discount;
  return `Total Cost: $${totalCost}`;
};

// Test Data:
console.log(calculateSubscriptionCost("Basic", 6, 10));   // Expected output: "Total Cost: $50"
console.log(calculateSubscriptionCost("Premium", 12, 0));   // Expected output: "Total Cost: $240"

//Task 5: Returning Values 
const convertCurrency = (amount, exchangeRate) => {
  const convertedAmount = amount * exchangeRate;
  return `Converted Amount: $${convertedAmount.toFixed(2)}`;
};

// Test Data:
console.log(convertCurrency(100, 1.1));  // Expected output: "Converted Amount: $110.00"
console.log(convertCurrency(250, 0.85)); // Expected output: "Converted Amount: $212.50"