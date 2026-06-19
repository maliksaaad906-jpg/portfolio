import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";


export const metadata = {
  title: "Mohammad Saad Portfolio",
  description: "Graduate Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}