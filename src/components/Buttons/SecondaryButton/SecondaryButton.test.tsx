
import { screen, render, fireEvent } from '@testing-library/react-native'
import { SecondaryButton } from './SecondaryButton'

const mockHandlePress = jest.fn();

describe('Secondary Button', () => {
  it('should call handle press function on press', () => {
    render(
      <SecondaryButton
        text="send"
        onPress={mockHandlePress}
        a11y={{ accessibilityLabel: 'send', accessibilityHint: 'press button to send form' }}
      />
    );
    const button = screen.getByRole('button');
    fireEvent.press(button);
    expect(mockHandlePress).toHaveBeenCalledTimes(1);
  });

  it('should have an accesible label & hint', () => {
    render(
      <SecondaryButton
      text="send"
      onPress={mockHandlePress}
      a11y={{ accessibilityLabel: 'send', accessibilityHint: 'press button to send form' }}
    />);
    screen.getByAccessibilityHint(/press button to send/i);
    const button = screen.getByRole('button');
    expect(button).toHaveAccessibilityValue(/send/i);
  });
});