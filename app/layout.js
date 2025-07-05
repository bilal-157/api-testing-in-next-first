// app/layout.js
export const metadata = {
  title: "My Full Stack App",
  description: "A full stack app using Next.js API routes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
