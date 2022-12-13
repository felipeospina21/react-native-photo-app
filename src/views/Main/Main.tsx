import { PrimaryLayout } from '@layouts';
import { Topics, Feed } from './components';

export function MainView() {
  return (
    <PrimaryLayout>
      <Topics />
      <Feed/>
    </PrimaryLayout>
  );
}
