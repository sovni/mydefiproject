// MyDeFiProject.sol
pragma solidity 0.6.12;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
 
contract MyDeFiProject {
 
 constructor() public {
   // injecter l'address du token Dai à utiliser
   dai = IERC20(0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa);
 }
 
 // fonction qui permet d'effectuer un transfer de dai vers le recipient
 function foo(address recipient, uint amount) external {
   // quelques instructions
   dai.transfer(recipient, amount);
 }
}