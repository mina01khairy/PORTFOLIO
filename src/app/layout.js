
import React from 'react';
import "./globals.css";


export const metadata = {
  title: "PORTFOLIO",
  icons: {
    icon: [
      { url: "/img/mina.ico" }
    ],
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


