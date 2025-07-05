
// Payment Method Interface (Implementor)
interface PaymentMethod {
  pay(amount: number): void;
}

// Concrete Payment Methods
class UPIPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`✅ Paid ₹${amount} via UPI`);
  }
}

class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`✅ Paid ₹${amount} using Credit Card`);
  }
}


// Payment Platform (Abstraction)
class PaymentPlatform {
  constructor(protected method: PaymentMethod) {}

  makePayment(amount: number): void {
    this.method.pay(amount);
  }
}

// Concrete Platforms
class WebPlatform extends PaymentPlatform {
  makePayment(amount: number): void {
    console.log("🌐 Web Payment Started");
    super.makePayment(amount);
  }
}

class MobilePlatform extends PaymentPlatform {
  makePayment(amount: number): void {
    console.log("📱 Mobile Payment Started");
    super.makePayment(amount);
  }
}

const webWithUPI = new WebPlatform(new UPIPayment());
webWithUPI.makePayment(1000);

const mobileWithCard = new MobilePlatform(new CardPayment());
mobileWithCard.makePayment(2000);

const webWithCard = new WebPlatform(new CardPayment());
webWithCard.makePayment(1500);

const mobileWithUPI = new MobilePlatform(new UPIPayment());
mobileWithUPI.makePayment(800);

//Without Bridge pattern
//Separate classes for every combination

// class WebUPIPayment {
//   pay(amount: number): void {
//     console.log("🌐 Web Payment Started");
//     console.log(`✅ Paid ₹${amount} via UPI`);
//   }
// }

// class WebCardPayment {
//   pay(amount: number): void {
//     console.log("🌐 Web Payment Started");
//     console.log(`✅ Paid ₹${amount} using Credit Card`);
//   }
// }

// class MobileUPIPayment {
//   pay(amount: number): void {
//     console.log("📱 Mobile Payment Started");
//     console.log(`✅ Paid ₹${amount} via UPI`);
//   }
// }

// class MobileCardPayment {
//   pay(amount: number): void {
//     console.log("📱 Mobile Payment Started");
//     console.log(`✅ Paid ₹${amount} using Credit Card`);
//   }
// }

// const webUPI = new WebUPIPayment();
// webUPI.pay(1000);

// const webCard = new WebCardPayment();
// webCard.pay(1500);

// const mobileUPI = new MobileUPIPayment();
// mobileUPI.pay(800);

// const mobileCard = new MobileCardPayment();
// mobileCard.pay(2000);
