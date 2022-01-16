// 2_deploy_contracts.js
const MyDeFiProject = artifacts.require("MyDeFiProject");
 
module.exports = async function(deployer, _network, accounts) {
 await deployer.deploy(MyDeFiProject);
 const myDeFiProject = await MyDeFiProject.deployed();
 await dai.faucet(myDeFiProject.address, 100);
 await myDeFiProject.foo(accounts[1], 100);
 
 const balance0 = await dai.balanceOf(myDeFiProject.address);
 const balance1 = await dai.balanceOf(accounts[1]);
 
 console.log(balance0.toString());
 console.log(balance1.toString());
};