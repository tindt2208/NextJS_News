import '@/app/ui/global.css'
import Sidebar from './components/SideBar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col p-6">
          <Sidebar />
          {children}
        </main>
      </body>
    </html >
  );
}
