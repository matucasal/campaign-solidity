import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	CampaignFactory.abi,
	'0xCb4A90883deEaF82Df9C65F7BBf1a8304A21e170'
	)

	
export default instance;