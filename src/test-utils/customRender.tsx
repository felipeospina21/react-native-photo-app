/* eslint-disable react/display-name */
import { render, type RenderOptions } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

/* Testing library render function overwritten */
export function renderWithProviders(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>),
  };
}

/* Wrapper for hooks */
export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  );
}

interface ProvidersParams {
  children: JSX.Element
}
const Providers = ({children}: ProvidersParams) => {
  const testQueryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}


export function customRender(ui: JSX.Element, options?: RenderOptions){
  render(ui, {wrapper: Providers, ...options})
}