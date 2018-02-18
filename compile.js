// read contract file off hard drive
// path module will add cross platform compatibility
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// read in raw source code
const source = fs.readFileSync(inboxPath, 'utf8');

// export compiled Inbox contracts
module.exports = solc.compile(source, 1).contracts[':Inbox'];

// log all compiled contracts for testing
// console.log(solc.compile(source, 1));
