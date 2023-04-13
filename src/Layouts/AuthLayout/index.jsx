import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Outlet />
      </div>
    </div>
  );
};
