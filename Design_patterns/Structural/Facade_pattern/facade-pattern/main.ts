import { BankFacade } from "./facade/BankFacade";

const bank = new BankFacade();

// ✅ Successful transfer
bank.transfer("Arjun", "Raj", 300);

// ❌ Fails due to insufficient balance
bank.transfer("Raj", "Arjun", 600);

// ❌ Fails due to invalid user
bank.transfer("", "Raj", 200);
