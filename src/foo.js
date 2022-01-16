const Web3 = require('web3')
const rpcURL = "https://kovan.infura.io/v3/c965c67e8aaf4a78ac3702d34449fd95"
const web3 = new Web3(rpcURL)
const fs = require('fs')

var ABI = JSON.parse(fs.readFileSync('../build/contracts/MyDefiProject.json', 'utf8'));

var Tx     = require('ethereumjs-tx').Transaction
const SSaddress = "0xE77AF4A0c66285Bbd10c8Ef000EbE9d8989042e1";
const account1 = '0xa2Dc06a53dC13E48DbD59b6c9974ECC8060F1da4' // Your account address 1
const privateKey1 = Buffer.from('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
 const myDefi = new web3.eth.Contract(ABI.abi, SSaddress);
 const data = myDefi.methods.foo("0x28518dE5FE0D670c4Da8B5bBDe5B239153Dc5f8a", web3.utils.toWei('90')).encodeABI();
  const txObject = {
   nonce:    web3.utils.toHex(txCount),
   gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
   gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
   to: SSaddress,
   data: data
 }

 var tx = new Tx(txObject, {'chain':'kovan'});
 tx.sign(privateKey1)

 const serializedTx = tx.serialize()
 const raw = '0x' + serializedTx.toString('hex')

 web3.eth.sendSignedTransaction(raw, (err, txHash) => {
   console.log('err:', err, 'txHash:', txHash)
   // Use this txHash to find the contract on Etherscan!
 })
})