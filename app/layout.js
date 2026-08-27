import './globals.css';

export const metadata = {
  title: 'Culinary Showdown',
  description: 'Hot Meals vs Frozen Goods — a chaotic culinary showdown.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
