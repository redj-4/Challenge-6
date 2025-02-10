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

//Task 6: High-Order Functions
const orders = [200, 600, 1200, 450, 800]; // Declare the array orders

// Higher-order function to apply a discount function on each order
const applyBulkDiscount = (orders, discountFunction) => orders.map(discountFunction);

// Apply discount: if order > 500, apply a 10% discount; otherwise, keep the order as is.
const discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

// Test Data Output:
console.log(discountedOrders); // Expected output: [200, 540, 1080, 450, 720]

//Task 7: Closures 
// Function that creates an expense tracker using closures
const createExpenseTracker = () => {
  let totalExpenses = 0;
  return (expense) => {
    totalExpenses += expense;
    return `Total Expenses: $${totalExpenses}`;
  };
};

// Test Data
let tracker = createExpenseTracker();
console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"

//Task 8: Recursion in Javascript
const calculateYearsToPromotion = (employeeLevel) => {
  // Helper recursive function that calculates the total years needed
  const yearsNeeded = (level) => {
    if (level >= 10) {
      return 0;
    }
    return 2 + yearsNeeded(level + 1);
  };

  return `Years to Level 10: ${yearsNeeded(employeeLevel)}`;
};

// Test Data:
console.log(calculateYearsToPromotion(7)); // Expected output: "Years to Level 10: 6"
console.log(calculateYearsToPromotion(5)); // Expected output: "Years to Level 10: 10"