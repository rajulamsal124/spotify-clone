import Sidebar from "@/components/Slidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProviders";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/toasterProvider/ToasterProvider";
import getSongsByUserId from "@/actions/songs/getSongsByUserId";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Born to listen stunning music",
};
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
