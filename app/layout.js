
import "./globals.css";


export const metadata = {
  title: "Carve Academy",
  description: "Carve Academy Prototype",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
