class JournalEntry {
  constructor({
    id,
    date = new Date(),
    description,
    reference,
    status = 'draft', // draft, posted, void
    lines = [],
    createdBy,
    createdAt = new Date(),
    lastUpdated = new Date()
  }) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.reference = reference;
    this.status = status;
    this.lines = lines;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.lastUpdated = lastUpdated;
  }

  addLine(line) {
    this.lines.push({
      ...line,
      lineNumber: this.lines.length + 1
    });
    this.lastUpdated = new Date();
  }

  removeLine(lineNumber) {
    const index = this.lines.findIndex(l => l.lineNumber === lineNumber);
    if (index !== -1) {
      this.lines.splice(index, 1);
      // Renumber remaining lines
      this.lines.forEach((line, i) => {
        line.lineNumber = i + 1;
      });
      this.lastUpdated = new Date();
    }
  }

  isBalanced() {
    const totals = this.lines.reduce(
      (acc, line) => {
        if (line.type === 'debit') {
          acc.debits += line.amount;
        } else {
          acc.credits += line.amount;
        }
        return acc;
      },
      { debits: 0, credits: 0 }
    );
    
    return Math.abs(totals.debits - totals.credits) < 0.01; // Account for floating point precision
  }

  post() {
    if (this.status !== 'draft') {
      throw new Error('Only draft entries can be posted');
    }
    if (!this.isBalanced()) {
      throw new Error('Journal entry must be balanced before posting');
    }
    this.status = 'posted';
    this.lastUpdated = new Date();
  }

  void(reason) {
    if (this.status !== 'posted') {
      throw new Error('Only posted entries can be voided');
    }
    this.status = 'void';
    this.lastUpdated = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      date: this.date,
      description: this.description,
      reference: this.reference,
      status: this.status,
      lines: this.lines,
      createdBy: this.createdBy,
      createdAt: this.createdAt,
      lastUpdated: this.lastUpdated
    };
  }
}
