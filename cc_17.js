// "Task 1 - Created Customer class"

class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    }
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    getTotalSpent() {
      return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
  }
  
  // Task 1 Logs
  console.log('=== Task 1: Customer Class ===');
  const customer1 = new Customer('John Doe', 'john@example.com');
  customer1.addPurchase(100);
  customer1.addPurchase(200);
  console.log('New customer created:', customer1);
  console.log('Total spent:', customer1.getTotalSpent());