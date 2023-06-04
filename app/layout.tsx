import { Figtree } from "next/font/google";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import "./globals.css";
import getSongsByUserId from "@/actions/songs/getSongsByUserId";
import Sidebar from "@/components/common/Slidebar";
import Player from "@/components/player/Player";
import SupabaseProvider from "@/providers/SupabaseProviders";
import ToasterProvider from "@/providers/toasterProvider/ToasterProvider";
import getActiveProductsWithPrices from "@/actions/subscribe/getActiveProductsWithPrices";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await getActiveProductsWithPrices();
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
