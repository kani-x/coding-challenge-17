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

// "Task 2 - Created SalesRep class"
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    addClient(customer) {
      this.clients.push(customer);
    }
  
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }
  
  // Task 2 Logs
  console.log('\n=== Task 2: SalesRep Class ===');
  const rep1 = new SalesRep('Jane Smith');
  rep1.addClient(customer1);
  console.log('Sales rep created:', rep1);
  console.log('Clients:', rep1.clients);
  console.log('Total spent by John Doe:', rep1.getClientTotal('John Doe'));

