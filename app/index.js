const Web3 = require('web3');
//let web3 = new Web3('ws://127.0.0.1:8545');
let web3 = new Web3( 'wss://rinkeby.infura.io/ws/v3/c72941ff3c594156aa6ffda1433e851e');

web3.eth.getChainId().then(function(chainId){
	console.log(chainId);
});
