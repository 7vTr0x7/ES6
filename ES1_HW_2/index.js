const calculateSalary = (hoursWorked, hourlyRate) => {
  return hoursWorked * hourlyRate;
};

const totalSalary = calculateSalary(20, 500);
console.log(`Total Salary: ${totalSalary}`);

const calculateBonus = (workedHours, marks, salary) => {
  let bonus;
  if (workedHours > 25 && marks > 85) {
    bonus = salary * 0.1;
    return (salary += bonus);
  } else if (workedHours > 15 && marks > 75) {
    bonus = salary * 0.05;
    return (salary += bonus);
  } else {
    return salary;
  }
};
const bonus = calculateBonus(20, 80, 5000);
console.log(bonus);

const calculateFinalAmount = (price1, quantity1, price2, quantity2) => {
  const totalOfQuantity1 = price1 * quantity1;
  const totalOfQuantity2 = price2 * quantity2;

  const finalAmount = totalOfQuantity1 + totalOfQuantity2;

  return finalAmount;
};

console.log(calculateFinalAmount(200, 10, 500, 5));

const calculateAllowance = (age, isStudent, baseAllowance) => {
  if (age < 18 && isStudent) {
    return (baseAllowance += 100);
  } else if (age >= 18 && age <= 25 && isStudent) {
    return (baseAllowance += 50);
  } else {
    return baseAllowance;
  }
};

const allowance = calculateAllowance(16, true, 500);
console.log(allowance);

const calculateShippingCost = (totalWeight, country, baseCost) => {
  if (totalWeight <= 1 && country === "Local") {
    return (baseCost += 10);
  } else if (totalWeight > 1 && country === "International") {
    return (baseCost += 20);
  } else {
    return baseCost;
  }
};

const shippingCost = calculateShippingCost(0.5, "Local", 50);
console.log(shippingCost);
