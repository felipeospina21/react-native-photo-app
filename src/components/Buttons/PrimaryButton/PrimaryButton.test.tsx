import { fireEvent, render, screen } from '@testing-library/react-native';
import { PrimaryButton } from './PrimaryButton';

const mockHandlePress = jest.fn();

describe('Primary Button', () => {
  it('should call handle press function on press', () => {
    render(
      <PrimaryButton
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
      <PrimaryButton
      text="send"
      onPress={mockHandlePress}
      a11y={{ accessibilityLabel: 'send', accessibilityHint: 'press button to send form' }}
    />);
    screen.getByAccessibilityHint(/press button to send/i);
    const button = screen.getByRole('button');
    expect(button).toHaveAccessibilityValue(/send/i);
  });
});
