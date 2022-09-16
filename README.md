# Multi Dex Arbitrage

```shell
https://github.com/ethancrypto/arbitrage-contract.git
cd DEX-Arbitrage
mv .env-example.txt .env
npm install
npx hardhat run --network matic .\scripts\deploy.js
```
Then copy the contract address into notepad. It will be used in backend server

Then to execute run:-

```shell
npx hardhat run --network matic .\scripts\deploy.js
```

Finally to recover any funds use the script.

```shell
npx hardhat run --network matic .\scripts\recover.js
```

#Verify contract
$ npx hardhat  verify --network matic 0x0e41F88eaFE5A0BFcB10ca4033A53C78eF88A9a3 '0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5'
