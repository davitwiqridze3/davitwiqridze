class BankAccount {
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.balance = balance;
    }
  
    // მეთოდი თანხის შეტანისთვის
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`შეტანილია ${amount} ₾. ახალი ბალანსი: ${this.balance} ₾`);
      } else {
        console.log('შეყვანილი თანხა არასწორია!');
      }
    }
  
    // მეთოდი თანხის გამოტანისთვის
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`გამოტანილია ${amount} ₾. ახალი ბალანსი: ${this.balance} ₾`);
      } else if (amount > this.balance) {
        console.log('არასაკმარისი თანხა ანგარიშზე!');
      } else {
        console.log('შეყვანილი თანხა არასწორია!');
      }
    }
  
    // მეთოდი თანხის ჩვენებისთვის
    showBalance() {
      console.log(`${this.owner}: ${this.balance} ₾`);
    }
  }
  
  // მაგალითის გამოყენება
  const myAccount = new BankAccount('ნიკა', 500);
  
  myAccount.showBalance(); // ნიკა: 500 ₾
  myAccount.deposit(200);  // შეტანილია 200 ₾. ახალი ბალანსი: 700 ₾
  myAccount.withdraw(100); // გამოტანილია 100 ₾. ახალი ბალანსი: 600 ₾
  myAccount.showBalance(); // ნიკა: 600 ₾
  