// 2_deploy_contracts.js
const MyDeFiProject = artifacts.require("MyDeFiProject");
 
module.exports = async function(deployer, _network, accounts) {
 await deployer.deploy(MyDeFiProject);
 const myDeFiProject = await MyDeFiProject.deployed();

};