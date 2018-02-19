const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// Web3 instance with provider to talk to ganache
const web3 = new Web3(ganache.provider());
