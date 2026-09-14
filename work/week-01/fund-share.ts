// The fund whose shares the token represents; the legal claim is on this fund's assets.
const fundName: string = "x365 Short Treasury Fund";
// Short ticker used in ledgers and the Share Token contract.
const shareSymbol: string = "XTF";
// Fictional NAV per share in dollars; set offchain, not by the token.
const sharePrice: number = 100;
// Whether holders may move shares between addresses without the Transfer Agent's approval.
const isTransferable: boolean = false;

console.log("Fund:", fundName);
console.log("Symbol:", shareSymbol);
console.log("Price per share:", sharePrice);
console.log("Transfers enabled:", isTransferable);
