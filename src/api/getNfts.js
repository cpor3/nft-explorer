import { Alchemy, Network, NftFilters } from "alchemy-sdk";
import { nanoid } from "nanoid";

const config = {
    apiKey: 'NTG8XcVQ4vkySq23ZhQuqD64pR4ZS1Lt', // for production use import.meta.env.VITE_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET
}

const alchemy = new Alchemy(config);

console.log(config);

export async function getNfts(address, pageNumber="") {
    const nfts = await alchemy.nft.getNftsForOwner(address, {
        excludeFilters: [NftFilters.SPAM]
    });

    const nftsWithId = nfts.ownedNfts.map(nft => {
        return {
            ...nft,
            id: nanoid()
        }
    });

    return nftsWithId;
}