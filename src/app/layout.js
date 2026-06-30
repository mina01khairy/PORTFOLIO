
import React from 'react';
import "./globals.css";


export const metadata = {
  title: "PORTFOLIO",
  icons: {
    icon: "/Mina.png",
  },
};


export default function RootLayout(props) {
  return (
    <html>
      <body>
        {props.children}
      </body>
    </html>
  );
}


