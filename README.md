# Test-Task
To Build a Simple Blockchain Simulation using JavaScript
# Simple Blockchain Simulation (JavaScript)

This project is a basic blockchain simulation built in **JavaScript** to demonstrate core blockchain concepts such as block structure, hashing, proof-of-work, and chain integrity validation.

---

## Features

- Block creation with:
  - Index
  - Timestamp
  - Transactions
  - Previous block hash
  - Current block hash (with SHA-256)
- Proof-of-work mining (adjustable difficulty)
- Tampering detection with a validation function

---

## Getting Started

### Prerequisites

- **Node.js** (Download from: https://nodejs.org)

### Installation & Run

1. Clone the repository or download the `simple_blockchain.js` file.
2. Open a terminal and navigate to the folder.
3. Run:

```bash
node simple_blockchain.js
```

You’ll see blocks being mined, the blockchain printed, and validation status before and after tampering.

---

## File Structure

```bash
simple_blockchain.js   # Main simulation script
```

---

## Functions

- `addBlock(newBlock)` - Adds and mines a new block
- `isChainValid()` - Validates the chain's integrity
- `tamperWithBlock(index, newData)` - Tamper with a block's data
- `printBlockchain()` - Prints the blockchain in readable JSON format

---

## Output Example

```bash
Mining block 1...
Block mined: 003b4a...
Mining block 2...
Block mined: 00e71c...

Blockchain:
[
  ... // JSON formatted blocks
]

Tampering with blockchain...
Blockchain valid? false
```
![image](https://github.com/user-attachments/assets/24bbfb73-1285-4c9d-b687-5ab713ea1ca4)
![image](https://github.com/user-attachments/assets/9a0d637f-3e7a-417c-a4ee-b1f461e4235e)

---

## Notes

- This is a simplified simulation and not suitable for production use.
- Proof-of-work difficulty is set to `2` for demonstration.

---

## Author

Made for the blockchain developer trainee Task.

---

## Contact

For any queries, reach out to my linkedin: https://www.linkedin.com/in/kushagra-kartikeye-06a270278/

