import React, { useState } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaigns from '../ethereum/campaign'
import web3 from '../ethereum/web3'
import Router from 'next/router'

const ContributeForm = (props) => {
	const [value, setValue] = useState(0);

	const onSubmit = async (event) => {
		event.preventDefault();
		const campaign = Campaigns (props.address)

		try{
			const accounts = await web3.eth.getAccounts ();
			await campaign.methods.contribute().send({
				from: accounts[0],
				value: web3.utils.toWei(value, 'ether')
			})
			console.log("send end");
			Router.reload(window.location.pathname)
		}
		catch(e){

		}

	}
	return(
		<Form onSubmit={onSubmit}>
			<Form.Field>
				<label>Amount to Contribute</label>
				<Input
					value={value}
					onChange={event => setValue(event.target.value)}
					label="ether"
					labelPosition="right"
				/>
				<Button primary>
					Contribute
				</Button>
			</Form.Field>
		</Form>
	);
};
	


export default ContributeForm;