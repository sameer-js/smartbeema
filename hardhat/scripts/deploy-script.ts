const hre = require("hardhat");

async function main() {
  const KharediContract = await hre.ethers.getContractFactory("Khaderi");
  const khaderi = await KharediContract.deploy();

  await khaderi.deployed();
  console.log("Khaderi deployed to:", khaderi.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// npx hardhat run --network matic scripts/deploy-script.ts
