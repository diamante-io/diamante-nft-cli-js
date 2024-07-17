# Diamante NFT CLI

This project provides a command-line interface (CLI) to create Non-Fungible Tokens (NFTs) using the Diamante SDK and IPFS for media storage.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/diamcircle/diamante-nft-cli-js.git
    cd diamante-nft-cli-js
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
DIAMANTE_HORIZON_SERVER=https://diamtestnet.diamcircle.io
IPFS_UPLOAD_URL=https://uploadipfs.diamcircle.io
```

##  Usage
To run the NFT creation process, use the following command in your terminal:
```node index.js```

You will be prompted to enter the following details:

#   Issuer secret key
#   Receiver secret key
#   Receiver public key
#   NFT name
#   NFT metadata
#   File path for the media
