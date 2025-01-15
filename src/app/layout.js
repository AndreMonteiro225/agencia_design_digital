import "./globals.css";
import Topo from "@/app/componentes/Topo";
import logo from "../../public/logo.png";


export const metadata = {
  title: "Design Digital",
  description: "A agência correta para o design digital esperado por você!",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  keywords: "agencia design digital",
  author: "desenvolvedor: André Monteiro Rachel",
  robots: "index, follow",
  icons: 
    {icon: "/logo.png"},
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
