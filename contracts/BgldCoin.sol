pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract BgldCoin is MintableToken { 
  string public name = "BURGENLAND COIN";
  string public symbol = "BGLD";
  uint8 public decimals = 18;
}
