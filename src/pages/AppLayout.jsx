import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <h1>App Layout!</h1>;
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
