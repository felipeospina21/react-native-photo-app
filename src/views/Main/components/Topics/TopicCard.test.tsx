import { render, screen} from '@testing-library/react-native';
import { TopicCard } from './TopicCard';
import logo from '@assets/logo.png'

describe('Topic Card', () => {

  const testName = 'Nature'
  it('should render Topic name', () => {
    render(<TopicCard name={testName} image={logo} />)
    expect(screen.getByText(testName)).toBeVisible()
  });

  it('should have a11y label & hint', () => {
    render(<TopicCard name={testName} image={logo} />)
    const card = screen.getByA11yHint(/press topic/i);
    expect(card).toHaveAccessibilityValue(/topic/i)
  });
});