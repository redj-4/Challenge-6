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
