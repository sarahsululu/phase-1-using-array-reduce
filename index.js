// Code your solution here
const batteryBatches = [
  { amount: 5},
  { amount: 10 },
  { amount: 15},
  { amount: 1 },
  
];
const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch.amount;
}, 0);