import { render, screen } from '@testing-library/react-native'
import { FeedCard } from './FeedCard'
import { photosMock } from '@mocks'

describe('Feed Card', () => {
  it('should show photo description & user name', () => {
    render(<FeedCard data={photosMock}/>)
    screen.getByText(photosMock.description)
    screen.getByText(photosMock.user.name)
  });
});
