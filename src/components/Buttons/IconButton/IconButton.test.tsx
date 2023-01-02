import { render, screen, fireEvent } from '@testing-library/react-native';
import { IconButton } from './IconButton';
import deleteIcon from '@assets/icons/delete.png'

const mockHandlePress = jest.fn();

describe('Icon Button', () => {
  it('should call handle press function on press', () => {
    render(
      <IconButton
        onPress={mockHandlePress}
        icon={deleteIcon}
        a11y={{ accessibilityLabel: 'delete button', accessibilityHint: 'press to delete' }}
      />
    );
    const button = screen.getByRole('button');

    fireEvent.press(button);
    expect(mockHandlePress).toHaveBeenCalledTimes(1);
  });

  it('should have an accesible label & hint', () => {
    render(<IconButton
      onPress={mockHandlePress}
      icon={deleteIcon}
      a11y={{ accessibilityLabel: 'delete button', accessibilityHint: 'press to delete' }}
    />);
    screen.getByAccessibilityHint(/press to delete/i);
    const button = screen.getByRole('button');
    expect(button).toHaveAccessibilityValue(/delete button/i);
  });

});
