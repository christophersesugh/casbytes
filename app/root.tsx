import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import markdownStyles from "~/markdown.css";
import { RootLayout } from "./components/layouts";
import { RootErrorUI } from "./components/root-error-ui";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fira+Code&family=Mulish&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: markdownStyles },
];

type DocumentProps = {
  children: React.ReactNode;
};

function Document({ children }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-100">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <RootLayout />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <Document>
      <RootErrorUI error={error} />
    </Document>
  );
}
