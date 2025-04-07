// simple_blockchain.js

const crypto = require('crypto');

class Block {
  constructor(index, timestamp, transactions, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto.createHash('sha256')
      .update(this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce)
      .digest('hex');
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log(`Block mined: ${this.hash}`);
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
  }

  createGenesisBlock() {
    return new Block(0, new Date().toISOString(), "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }

  tamperWithBlock(index, newTransactions) {
    if (index > 0 && index < this.chain.length) {
      this.chain[index].transactions = newTransactions;
      this.chain[index].hash = this.chain[index].calculateHash();
    }
  }

  printBlockchain() {
    console.log(JSON.stringify(this.chain, null, 2));
  }
}

// Simulation
const myBlockchain = new Blockchain();

console.log("Mining block 1...");
myBlockchain.addBlock(new Block(1, new Date().toISOString(), [{ from: "kushagra", to: "ranadhir", amount: 50 }]));

console.log("Mining block 2...");
myBlockchain.addBlock(new Block(2, new Date().toISOString(), [{ from: "ranadhir", to: "kunal", amount: 20 }]));

console.log("\nBlockchain:");
myBlockchain.printBlockchain();

console.log("\nTampering with blockchain...");
myBlockchain.tamperWithBlock(1, [{ from: "kushagra", to: "ranadhir", amount: 1000 }]);

console.log("\nBlockchain valid?", myBlockchain.isChainValid());
