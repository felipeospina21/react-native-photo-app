import image from '@assets/home-bg.png';
import { render, screen } from '@testing-library/react-native';
import { CardHeader } from './CardHeader';

describe('Feed Card Header', () => {
  test('should render user name and location', () => {
    render(
      <CardHeader img={image} name="Test name" createdAt="10/10/2020" userLocation="London" />
    );

    const name = screen.getByText(/test name/i);
    const pulishedAt = screen.getByText(/london/i);
    expect(name).toBeVisible();
    expect(pulishedAt).toBeVisible();
  });

  test('should render published photo with accessible lable & hint', () => {
    render(
      <CardHeader img={image} name="Test name" createdAt="10/10/2020" userLocation="London" />
    );

    const userImage = screen.getByAccessibilityHint(/published photo/i)
    expect(userImage).toHaveAccessibilityValue(/published photo/i)
  });
});
