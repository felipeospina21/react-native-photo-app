import { server, customRender } from '@test-utils';
import { screen, waitFor } from '@testing-library/react-native';
import { Topics } from './Topics';

describe('Topics', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should render a card with collection data', async () => {
    customRender(<Topics />);
    const name = await screen.findByText(/office/i);
    await waitFor(()=>{
      expect(name).toBeVisible()
    })
  });

  it('should render a list with two cards', async () => {
    customRender(<Topics />);
    const cards = await screen.findAllByA11yHint('press topic image to filter activity feed')
    expect(cards).toHaveLength(2)
  });
});
