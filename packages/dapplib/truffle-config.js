require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth praise proud gesture brand equal genius'; 
let testAccounts = [
"0xe47a497dfbec5e2e8491f54e0fda958bf034bcd2365247de76a6af09ce3b353d",
"0xb2c710d62c3fd828c0b7ffa62f8d3685f5f36b867f4c8e466a05d09d952e6567",
"0xa414055969c7315e81c06894cdf52c027d37940c7459a52bd8ff7496cb0ec720",
"0x4cfe7eea6f41f4d34e4cd88bc2c0ca686e99fb4d42315d5891568a414581d852",
"0xb7b4fe117146aaaf1360919cd25281160a1037b0cdc57eff82053c8709ce125c",
"0xcc927d2963cc49c4474b949a78f602541c52a13d8bf7a5059778fabd84402178",
"0x2bc6f8205dc59ff8d1e0b10f214baf2b25c47e608bffa8596d8fef3544109a5c",
"0x42bfd1d44143d2ab70f632f57be64392b01ee9c0a8f756e1fc4c08fec583e258",
"0x44f15678990f92dad17d958746dc2399ec8b894bc297433ba587d6255e4de79b",
"0x40d5d92eecd1805611403d58bcbb35cddca6bc3e74d38ca9173f40bd81cf4555"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

