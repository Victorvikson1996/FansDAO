import sdk from "./1-initialize-sdk.js"

import { readFileSync } from "fs"


const bundleDrop = sdk.getBundleDropModule(
    "0x1E8FF83d2711dAbaa5817F646Ca8F09350aD8638"
);

(
    async () => {
        try {

            await bundleDrop.createBatch([
                {

                    name: "Theater of Dreams",
                    description: "this NFT will give you access to FansDAO",
                    image: readFileSync("scripts/assets/ball.png")
                }

            ]);

            console.log("✅ Successfully created a new NFT in the drop!")

        } catch (error) {

            console.error("failed to create the new NFT", error)

        }
    }
)()