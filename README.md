# stargazejs

```sh
npm install stargazejs
```

```js
const { contracts } from 'stargazejs';

const client = new contracts.Minter.MinterClient(
    stargateClient,
    sender,
    contractAddres
);

await client.mint();
```