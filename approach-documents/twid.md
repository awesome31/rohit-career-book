# Approach Document: All Products Page

## Ticket Information

- **Ticket ID**: SPRIN-10785
- **Title**: TWIDPay Integration for Payments

## Overview

Create another method for users to do payments on the app using Twid. Twid helps users use their reward points to make payments. We are currently going to be doing only the burn flow, where users are allowed to spend points for discount.

## Proposed Solution

- Create these components in FE Mono:

  - **RewardOption**: This will render one single reward option and will have an onPress handler.
  - **PayUsingRewards**: This will render the list of reward options and also contain logic to show other methods and maintain the state of the accordion. It will take the onSelectRewardOption as a prop and call it whenever an option is selected.
  - **AddCardCallout**: This will get a backgroundColor, text, icon and type (Same as in RCL) and render the callout.

- Once these components are in place, we will get the data for the reward methods using the `wallet/twid` endpoint. This gives us the data required to render the PayUsingRewards component that we have created above.
- On selecting a particular reward, we will call the `wallet/twid` again with the reward_id as query param. Based on the query param, this API returns back the new paymentInfo. If the API has the paymentInfo, then we will update the local cart store's payment info. We will a full screen loader when this API is called.
- Since rewards are applicable on specfic cards, we will also get warningData in paymentInfo and display content accordingly.

## Technical Details

- **New Components/Functions**:
  - `useRewardData` custom hook for managing reward data.
  - `usePayUsingRewards`: Responsible for managing accordion states and calling callback functions.

## Considerations

**Cart Page Slowdown**: Need to make sure that the cart page does not slowdown. This can be done by making sure that the component loaded parallely to the cart call and its not blocking the rendering of the payments screen.

## Cross-Team Collaboration

- **Backend Team**: APIs already exist. Will create a mock file to have the API contract correct.

## Questions/Uncertainties

- How to send the reward data to Juspay SDK?

## Estimated Effort

8SP
