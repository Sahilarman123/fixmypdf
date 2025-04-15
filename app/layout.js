import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'FixMyPDF - All the FixMyPDF you need',
  description: 'Online FixMyPDF to convert, compress, merge, split and edit PDF files',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js" 
          strategy="beforeInteractive"
        />
        <Script id="pdf-worker-script">
          {`
            if (typeof window !== 'undefined') {
              window.pdfjsLib = window.pdfjsLib || {};
              window.pdfjsLib.GlobalWorkerOptions = window.pdfjsLib.GlobalWorkerOptions || {};
              window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
            }
          `}
        </Script>
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}