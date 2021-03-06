const claimFactory = require("../Model/claimModel");
//const contractabi = require("../abi/contract_abi");
const fetch = require("node-fetch");
const Web3 = require("web3");
const fs = require("fs");
const Tx = require("ethereumjs-tx");
const Binance = require('binance-api-node').default;


//CRUD functions for ico Pool
const claimFactoryCtrl = {
	storeClaim: async (req, res) => {
		try {
			//fetch last record
			const block = await claimFactory.find().limit(1).sort({ $natural: -1 });
			console.log(block, "bbbbbbbbbbbbbbbbbbbbbbb");
			var startBlock = 0;
			if (block.length) {
				startBlock = block[0].block_number + 1;
			}
			//console.log(startBlock, "ssssssssssssssssssssssssss");

			const blockchain_data = await fetch(
				`https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0xb009b3e51F81D1382e92e5FA56Be7a8e8A7a96dd&startblock=${startBlock}&endblock=latest&sort=asc&apikey=S5MX4JTHR55MSPYRN54BJYDUD3DCC1ZEHN`,
			);

			//`https://api-testnet.bscscan.com/api?module=account&action=txlist&address=${addr}&startblock=${startBlock}&endblock=latest&sort=asc&apikey=S5MX4JTHR55MSPYRN54BJYDUD3DCC1ZEHN`
			let response_data = await blockchain_data.json();
			// console.log(
			// 	response_data.result.length,
			// 	"resssssssssssssssssssssssssssspppppppppppponse",
			// );
			for (i = 0; i < response_data.result.length; i++) {
				let error = response_data.result[i].isError;
				let val = response_data.result[i].value;
				let tx_receipt_status = response_data.result[i].txreceipt_status;

				if (error == 0 && tx_receipt_status == 1 && val > 0) {
					const value18 = response_data.result[i].value / 1000000000000000000;

					const newClaim = new claimFactory({
						contract_address: response_data.result[i].to,
						from_address: response_data.result[i].from,
						value: value18,
						block_number: response_data.result[i].blockNumber,
					});
					console.log(newClaim, "line 47");
					await newClaim.save();
				}
			}
			res.json({ msg: "claim is up-to-date" });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	sendClaimToken: async (req, res) => {
		try {
			console.log('oooooooooooooooooooooooooo')
			const web3 = new Web3(
				new Web3.providers.HttpProvider(
					"https://data-seed-prebsc-1-s1.binance.org:8545/",
				),
			);
            
			//token calulation
			const client = Binance()
			const tokenRes = await client.prices();
			// console.log(tokenRes.BNBUSDT , "this is stoken resposseeeeee");
			const BNBRes = tokenRes.BNBUSDT;
	        //  const BNBAuto = BNBRes.toFixed(2);
			 console.log(BNBRes , "this is stoken resposseeeeee..........BNBRes.........");
			//  const x = amount *  * 100

			
			const token_address = "0xbA39F8Fe69Bc138EA3A9E964e31a76bb1515C130";
			const claimDetail = await claimFactory.find({
				claim_status: "0",
			});
			
			for (i = 0; i < claimDetail.length; i++) {
				let tokenAddress = token_address; // Token contract address
				let toAddress = claimDetail[i].from_address; // User address
				let fromAddress = "0x3D59f9f3271a6FCe00c074421C1f357271A78958";
				let privateKey = Buffer.from(
					"3f86089698d512ac8fdc93014d76a08dab76122f83db98bee5329b79ad91a4f9",
					"hex",
				);
				
				console.log(toAddress, "froooooooooooooooooooooooooommmmmmmmmmmmm");

				const rawdata = fs.readFileSync("abi/contract_abi.json", "utf8");
				// console.log(rawdata, "5555555555555555555555");
				let ContractAbi = JSON.parse(rawdata);
				let contract = new web3.eth.Contract(
					ContractAbi,
					tokenAddress,
					{
						from: fromAddress,
					},
				);

				// 1e18 === 1 HST
				// let amount = Web3js.utils.toHex(1e18)
				let amount = claimDetail[i].value;
				console.log(amount ,"from LIne 97.............................")
                 
				//calculation
				let CalAmount = amount * BNBRes * 100 ;
                console.log(CalAmount, "9999999999999999999999999999 .........CalAmount.........");
                
				const weiValue = CalAmount * 10**9;
				// const weiValue = web3.utils.toWei(`${CalAmount}`, "ether");
				console.log(weiValue,"line no 112 ....................");
				//console.log(amount, "9999999999999999999999999999");
				const count = await web3.eth.getTransactionCount(fromAddress);
				// console.log(count, "9999999999999999999999999999");

				let rawTransaction = {
					from: fromAddress,
					gasPrice: web3.utils.toHex(20 * 1e9),
					gasLimit: web3.utils.toHex(500000),
					to: tokenAddress,
					value: 0x0,
					data: contract.methods.transfer(toAddress, weiValue).encodeABI(),
					nonce: web3.utils.toHex(count),
					chainId: 97,
				};
				let transaction = new Tx(rawTransaction);
				// console.log(transaction, "878787878787878787878787");
				transaction.sign(privateKey);
				const trans = await web3.eth.sendSignedTransaction(
					"0x" + transaction.serialize().toString("hex"),
				);
				// console.log(trans, "000000000000000000000000");
				if (trans) {
					const states = await claimFactory.findOneAndUpdate(
						{ from_address: toAddress, claim_status: "0" },
						{ claim_status: "1" },
					);
					// console.log(states, "9999999999999999");
				}
			}
			res.json({ msg: "Tokens have been sent to respective users" });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},
};

module.exports = claimFactoryCtrl;
