import React from "react";
import { Link } from "react-router-dom";
import OList from "./OList";
import Title from "./Title";

export default function About(props) {
  const purpose = ["Register user if the user does not exist in Hotstar.", "Partner will be able to manage the lifecycle of the subscription attached to the user with the API framework.",
  "Webhook capability in the API framework allows partners to listen to subscription updates."]
  const onboarding = ["Partner needs to share the list of IP addresses with the Hotstar team. Hotstar team will whitelist them as a form of authorization on its APIs.",
  "Partners will be required to share a webhook endpoint for Hotstar to notify them of subscription creation if they wish to create subscriptions.",
  "Hotstar will then share with the partners access and secret keys to access the API framework."]
  return (
    <div>
      <Title value="Description"/>
      <br/>
      <p>Enabling Partners integration with Hotstar platform to provide partner-specific subscriptions yearly or monthly based on the plan.</p>
      <br/><br/>
      <Title value="Purpose of the Partner Integration framework "/>
      <br/>
      <p>
      Allocate partner-specific subscriptions to the user as agreed between Hotstar and the partner.
      </p>
      <OList listItems={purpose}/>
      <br/><br/>
      <Title value="Onboarding"/>
      <br/>
      <OList listItems={onboarding}/>
      <br/><br/><br/>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
