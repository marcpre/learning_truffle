# learning_truffle

## Install Truffle

`npm install -g truffle`

## Create a project

Download a project that is built with truffle

`truffle unbox <project_name>`

Init a new project

`truffle init`

## Choose an Ethereum Client (For Developing)

[Ganach](http://truffleframework.com/ganache/)

[Truffle Website - Choosing an Ethereum Client](http://truffleframework.com/docs/getting_started/client)


## Compiling contracts

**On windows always use `truffle.cmd` instead of just `truffle`**

`truffle compile`

##Run Migrations (Deploy contract

`truffle migrate`

or

`truffle.cmd migrate --network development`

"Truffle requires you to have a Migrations contract in order to use the Migrations feature. This contract must contain a specific interface, but you're free to edit this contract at will." [Truffle Website - Migrations](http://truffleframework.com/docs/getting_started/migrations)


## Revert Migration

`truffle migrate --reset`

## Create Test

On Windows:

`truffle.cmd create test testtesttest`

Just leave `.cmd` away under linux.

Creates a `.js` file in the test folder with a test stub

[Smart Contract Testing](https://medium.com/taipei-ethereum-meetup/smart-contract-unit-testing-use-erc20-token-contract-as-an-example-d150c2700834)
