import { Outlet } from "@remix-run/react";

export function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
