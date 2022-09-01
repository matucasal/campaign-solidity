import React, { useEffect, useState } from 'react'
import factory from '../ethereum/factory';

function CampaignIndex({campaigns}) {
	 
	return (
    <div>
      <h2>{campaigns[0]}</h2>
		</div>
	)

}

CampaignIndex.getInitialProps = async (ctx) => {
  const campaigns = await factory.methods.getDeployedCampaigns().call()
	console.log('campaigns',campaigns)
  
  return {campaigns: campaigns }
}

export default CampaignIndex
