export const metadata = {
  metadataBase: new URL("https://registerwithus.com"),
  title: {
    default: "Register With Us",
    template: "%s | Register With Us",
  },
  description: "Official Register With Us platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
