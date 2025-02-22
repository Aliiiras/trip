import "./globals.css";
import TanstackQueryProvider from "./core/providers/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "./components/common/modal/ModalContext";

export const metadata = {
  title: "Trip",
  description: "leave this part to us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="custom-class">
      <ModalProvider>
        <body>
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
          <Toaster />
        </body>
      </ModalProvider>
    </html>
  );
}
