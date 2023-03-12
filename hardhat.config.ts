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
      // url: "http://127.0.0.1:7545",
      url: "https://goerli.infura.io/v3/dc0429ceb25e4d52a8fde9ee0c3a3c01",
      accounts: ["d92b9ced8996cc532297517370898c6c1eabb9e8a69f69e48aeee515bf229f46"]
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
