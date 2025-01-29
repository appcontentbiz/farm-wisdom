import { Account } from './Account';
import { JournalEntry } from './JournalEntry';

class LedgerManager {
  constructor() {
    this.accounts = new Map();
    this.journalEntries = new Map();
    this.listeners = new Set();
  }

  createAccount(accountData) {
    const account = new Account(accountData);
    this.accounts.set(account.id, account);
    this._notifyListeners('account', 'create', account);
    return account;
  }

  updateAccount(id, updates) {
    const account = this.accounts.get(id);
    if (!account) {
      throw new Error(`Account ${id} not found`);
    }
    Object.assign(account, updates);
    account.lastUpdated = new Date();
    this._notifyListeners('account', 'update', account);
    return account;
  }

  createJournalEntry(entryData) {
    const entry = new JournalEntry(entryData);
    this.journalEntries.set(entry.id, entry);
    this._notifyListeners('journal', 'create', entry);
    return entry;
  }

  postJournalEntry(id) {
    const entry = this.journalEntries.get(id);
    if (!entry) {
      throw new Error(`Journal entry ${id} not found`);
    }

    // Post the entry
    entry.post();

    // Update account balances
    entry.lines.forEach(line => {
      const account = this.accounts.get(line.accountId);
      if (!account) {
        throw new Error(`Account ${line.accountId} not found`);
      }
      account.updateBalance(line.amount, line.type);
    });

    this._notifyListeners('journal', 'post', entry);
    return entry;
  }

  voidJournalEntry(id, reason) {
    const entry = this.journalEntries.get(id);
    if (!entry) {
      throw new Error(`Journal entry ${id} not found`);
    }

    // Void the entry
    entry.void(reason);

    // Reverse account balances
    entry.lines.forEach(line => {
      const account = this.accounts.get(line.accountId);
      if (!account) {
        throw new Error(`Account ${line.accountId} not found`);
      }
      account.updateBalance(line.amount, line.type === 'debit' ? 'credit' : 'debit');
    });

    this._notifyListeners('journal', 'void', entry);
    return entry;
  }

  getTrialBalance(asOfDate = new Date()) {
    const balances = {
      assets: 0,
      liabilities: 0,
      equity: 0,
      revenue: 0,
      expenses: 0
    };

    for (const account of this.accounts.values()) {
      balances[account.type] += account.balance;
    }

    return {
      ...balances,
      netIncome: balances.revenue - balances.expenses,
      totalAssets: balances.assets,
      totalLiabilitiesAndEquity: balances.liabilities + balances.equity
    };
  }

  getAccountTransactions(accountId, startDate = null, endDate = null) {
    const transactions = [];
    
    for (const entry of this.journalEntries.values()) {
      if (entry.status !== 'posted') continue;
      if (startDate && entry.date < startDate) continue;
      if (endDate && entry.date > endDate) continue;

      const lines = entry.lines.filter(line => line.accountId === accountId);
      if (lines.length > 0) {
        transactions.push({
          date: entry.date,
          description: entry.description,
          reference: entry.reference,
          lines
        });
      }
    }

    return transactions.sort((a, b) => a.date - b.date);
  }

  addListener(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  _notifyListeners(type, action, data) {
    this.listeners.forEach(callback => {
      callback(type, action, data);
    });
  }
}
