import { stargaze } from '../src/proto';

it('messages', async () => {
  expect(
    stargaze.mint.v1beta1.Minter.fromPartial({
      annualProvisions: 'str'
    })
  ).toMatchSnapshot();
});
