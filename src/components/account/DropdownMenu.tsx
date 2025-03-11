import React from "react";
import { handleMenuClick } from "../../lib/api";
import Button from "../ui/Button";
import { useAuth } from "@/contexts/AuthContext";

const DropdownMenu = () => {
  const { logout, userId } = useAuth();
  const clientId = userId ? Number(userId) : null;
  const validClientId = !isNaN(clientId as number) ? clientId : null;
  const serviceId = 1; // Replace with dynamic values if needed

  const handleLogout = () => {
    logout();
  };

  return (
    <ul className="grid grid-cols-1 gap-x-4">
      {[
        { label: "Profile", action: "clientarea:profile" },
        { label: "Services", action: "clientarea:services" },
        { label: "Billing", action: "clientarea:billing" },
        { label: "Support", action: "clientarea:support" },
        { label: "Invoices", action: "clientarea:invoices" },
        { label: "Domains", action: "clientarea:domains" },
      ].map(({ label, action }) => (
        <li
          key={action}
          className="block cursor-pointer rounded p-2 transition hover:bg-lightBlue/10 lg:px-3"
          onClick={() => {
            if (validClientId !== null) {
              handleMenuClick(action, validClientId, serviceId);
            } else {
              console.error("Invalid Client ID:", validClientId);
            }
          }}
        >
          {label}
        </li>
      ))}
      <li className="group">
        <Button
          className="block rounded py-2 transition hover:bg-lightBlue/10 lg:px-3"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </li>
    </ul>
  );
};

export default DropdownMenu;
