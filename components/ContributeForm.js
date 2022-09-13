import React, { useState } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaigns from '../ethereum/campaign'
import web3 from '../ethereum/web3'
import Router from 'next/router'

const ContributeForm = (props) => {
	const [value, setValue] = useState(0);
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const onSubmit = async (event) => {
		event.preventDefault();
		const campaign = Campaigns (props.address)
		setErrorMessage('');
		setLoading(true);
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
			setErrorMessage(e.message);
		}

		setValue('');
		setLoading(false);
	}
	return(
		<Form onSubmit={onSubmit} error={!!errorMessage}>
			<Form.Field>
				<label>Amount to Contribute</label>
				<Input
					value={value}
					onChange={event => setValue(event.target.value)}
					label="ether"
					labelPosition="right"
				/>
			</Form.Field>
			<Message error header="Oops!" content={errorMessage} />
			<Button primary loading={loading}>
					Contribute
				</Button>
		</Form>
	);
};
	


export default ContributeForm;