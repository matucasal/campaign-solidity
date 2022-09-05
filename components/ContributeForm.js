import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';

const ContributeForm = () => {
	return(
		<Form>
			<Form.Field>
				<label>Amount to Contribute</label>
				<Input
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