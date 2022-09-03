import React, { useEffect, useState } from 'react'
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

function CampaignIndex({campaigns}) {
	
	const renderCampaigns = () => {
		const items = campaigns.map(address =>{
			return{
				header: address,
				description: <a>View Campaign</a>,
				fluid: true
			}
		});

		return <Card.Group items={items} />;
	};

	return (
    <div>
			<Layout>
				
				<h3>Open Campaigns</h3>
				<Button floated="right"
					content="Create Campaign"
					icon="add circle"
					primary
				/>
				{renderCampaigns()}
			
			</Layout>
		</div>
	)

}

CampaignIndex.getInitialProps = async (ctx) => {
  const campaigns = await factory.methods.getDeployedCampaigns().call()
	console.log('campaigns',campaigns)
  
  return {campaigns: campaigns }
}

export default CampaignIndex
