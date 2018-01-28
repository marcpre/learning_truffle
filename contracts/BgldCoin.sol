pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract BgldCoin is MintableToken { //We practically let OpenZeppelin smart contract templates do all the heavy duty for us. Here we reference MintableToken . The idea is to have a token where the supply is controlled by an owner who can emit tokens and assign them.
  string public name = "BURGENLAND COIN";
  string public symbol = "BGLD";
  uint8 public decimals = 18;
}
