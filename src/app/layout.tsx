import type { ReactNode } from 'react';

export const metadata = {
  title: 'LaunchPad Demo Shop',
  description: 'A fictional storefront hosted on LaunchPad Cloud. All data is fictional.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
