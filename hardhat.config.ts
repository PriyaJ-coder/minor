// import "@nomiclabs/hardhat-waffle";
// import('hardhat/config').HardhatUserConfig
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";

// const MAINNET_URL = process.env.MAINNET_URL as string;
// const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
// console.log("RU", MAINNET_URL);

const config: HardhatUserConfig = {
  solidity: "0.8.11",
  networks: {
    hardhat: {
      chainId: 1337
    },
    network: {
      url: "http://127.0.0.1:7545",
      accounts: ["4c1d746ddb49f5588fd5d5acbd85526370bdd86327b8f7dcf0c9937ef39c6235"]
    },
  },
};

export default config;

// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// const config: HardhatUserConfig = {
//   solidity: "0.8.18",
// };

// export default config;
