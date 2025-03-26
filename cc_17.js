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

// "Task 3 - Extended VIPCustomer class"
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
    }
  
    getTotalSpent() {
      const baseTotal = super.getTotalSpent();
      return baseTotal * 1.10; // 10% bonus
    }
  }
  
  // Task 3 Logs
  console.log('\n=== Task 3: VIPCustomer Class ===');
  const vipCustomer = new VIPCustomer('Sarah Johnson', 'sarah@example.com', 'Gold');
  vipCustomer.addPurchase(300);
  vipCustomer.addPurchase(400);
  console.log('VIP customer created:', vipCustomer);
  console.log('Total spent with bonus:', vipCustomer.getTotalSpent());

// "Task 4 - Finalized reporting system"
// Task 4: Client Report System
console.log('\n=== Task 4: Client Report System ===');

// Create additional customers
const customer2 = new Customer('Mike Brown', 'mike@example.com');
customer2.addPurchase(150);
customer2.addPurchase(450); // Total $600

const vipCustomer2 = new VIPCustomer('Emily Davis', 'emily@example.com', 'Platinum');
vipCustomer2.addPurchase(600);
vipCustomer2.addPurchase(400); // Total $1100 + 10% = $1210

// Add all customers to an array
const allCustomers = [customer1, customer2, vipCustomer, vipCustomer2];

// Add some clients to sales rep
rep1.addClient(customer2);
rep1.addClient(vipCustomer);

// Calculate total revenue
const totalRevenue = allCustomers.reduce((total, customer) => 
  total + customer.getTotalSpent(), 0);
console.log('Total revenue from all customers:', totalRevenue.toFixed(2));

// Find high-spending customers (> $500)
const highSpendingCustomers = allCustomers.filter(
  customer => customer.getTotalSpent() > 500);
console.log('High-spending customers (> $500):', highSpendingCustomers);

// Create customer summary
const customerSummary = allCustomers.map(customer => ({
  name: customer.name,
  totalSpent: customer.getTotalSpent().toFixed(2),
  type: customer instanceof VIPCustomer ? 'VIP' : 'Regular'
}));
console.log('Customer summary:', customerSummary);