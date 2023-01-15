export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <h1>Add Todo List</h1>
        {children}
      </body>
    </html>
  )
}
