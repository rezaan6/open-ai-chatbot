"use client";
import { Toaster } from "react-hot-toast";

const ClientProvider = () => {
  return (
    <>
      {/* Toaster component to display notifications to the user */}
      <Toaster position="top-right" />
    </>
  );
};

export default ClientProvider;
