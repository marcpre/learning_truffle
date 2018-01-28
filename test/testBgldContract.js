var BgldCoin = artifacts.require("./BgldCoin.sol");

var account1 = web3.eth.accounts[1];

BgldCoin.deployed().then(inst => { crowdsale = inst });

crowdsale.token().then(addr => { tokenAddress = addr } );

bgldCoinInstance = BgldCoin.at(tokenAddress);

BgldCoinCrowdsale.deployed().then(inst => inst.sendTransaction({ from: account1, value: web3.toWei(5, "ether")}))

bgldCoinInstance.balanceOf(account1).then(balance => account1GusTokenBalance = balance.toString(10));

web3.fromWei(account1GusTokenBalance, "ether");
