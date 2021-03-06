const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoAPI");
// const isRequired = require("../utils/validation");

const check = {
	async price(cmd) {
		try {
			keyManager = new KeyManager();
			const key = keyManager.getKey();

			const api = new CryptoAPI(key);

			const priceData = await api.getPriceData(cmd.coin, cmd.cur);

			console.log(priceData);
		} catch (err) {
			console.log(err.message.red);
		}
	},
};

module.exports = check;
