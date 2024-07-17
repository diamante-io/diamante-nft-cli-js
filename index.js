// index.js
const readlineSync = require('readline-sync');
const { createNFT } = require('./services/createNFT');

// Prompt for details
const issuerSecret = readlineSync.question('Enter the issuer secret key: ');
const receiverSecret = readlineSync.question('Enter the receiver secret key: ');
const receiverPublicKey = readlineSync.question('Enter the receiver public key: ');
const nftName = readlineSync.question('Enter the NFT name: ');
const nftMetadata = readlineSync.question('Enter the NFT metadata: ');
const filePath = readlineSync.question('Enter the file path for the media: ');

async function mintNFT() {
  try {
    const result = await createNFT(issuerSecret, receiverSecret, receiverPublicKey, nftName, nftMetadata, filePath);
    console.log(result);
  } catch (error) {
    console.error('Error creating NFT:', error);
  }
}

mintNFT();
