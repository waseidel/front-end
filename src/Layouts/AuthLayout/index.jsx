import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex h-screen">
      <div
        className="m-auto flex flex-col gap-4 p-6 rounded-lg border shadow-lg"
      >
        <Outlet />
      </div>
    </div>
  );
}
