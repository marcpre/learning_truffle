var Migrations = artifacts.require("./Migrations.sol");
var BgldCoin = artifacts.require('./BgldCoin.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  //deployer.deploy(BgldCoin);
};
