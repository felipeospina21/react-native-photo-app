import { screen } from '@testing-library/react-native';
import { Feed } from './Feed'
import { server, customRender } from '@test-utils'

describe('Feed', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should render a title after loading data', async () => {
    customRender(<Feed/>)
    const title = await screen.findByText(/activity feed/i)
    expect(title).toBeVisible()
  });
});