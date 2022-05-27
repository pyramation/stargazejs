# stargazejs

```sh
npm install stargazejs
```

```js
const { contracts } from 'stargazejs';

const client = new contracts.Minter.MinterClient(
    stargateClient,
    sender,
    contractAddress
);

await client.mint();
```

Contracts supported:

- Minter
- Sg721
- Ics721
- Claim
- RoyaltyGroup
