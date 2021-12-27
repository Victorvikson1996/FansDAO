import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x0ED5a5b79044fEd076c389Ac55F3CF2a8B4256Ef");

(async () => {
    try {
        // Deploy a standard ERC-20 contract.
        const tokenModule = await app.deployTokenModule({
            // What's your token's name? Ex. "Ethereum"
            name: "⚽ FansDAO Governance Token",
            // What's your token's symbol? Ex. "ETH"
            symbol: "AKU",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();