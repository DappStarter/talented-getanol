require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain uncover inner arena orange such'; 
let testAccounts = [
"0xb4c2bc51447b45d2fc55fa02ada608f3e3e27438dab415aee0fc9000f9bec20c",
"0x0c1d0d0b092dcac5cb73ba4de80cb919f21f46764615173ee341d5da3b03fe0a",
"0xcb5efc7fca32dbac5058110487cb4e0a8c7c1a3fcdd6e143ab1197f0c13ed631",
"0xd89a484504ee22f104d7d56f5615a23f0841c0e9c155b0bd256dcd4e1c04160e",
"0xc5a07ea9e72d4dba814a4e088dfa32427948fa3f650de3db34bb5dfc9338f517",
"0xee502ef7ecfcb70a1aee1051cb204f1d17a94ff3e2bdca284c25f7cbec1f6a7b",
"0xa5b581a53f062c76f274f6e06639a1cec761d1cdca3373399820567bc251be9d",
"0xed4a70d2804895be60ee22e854f693aafe94577be24b5733bf7751487e0119b3",
"0x6a0b002dea438a845e463d40e4030c35d9ee53765f67591442cc38815a5aef26",
"0x7896185a504c3ce0bf97553028d7bb07e4690f9d28b6e5565433d83a1eedbe06"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
