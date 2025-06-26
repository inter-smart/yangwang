"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: {
            background: "#10B981",
            color: "#FFFFFF",
          },
        },
        error: {
          style: {
            background: "#EF4444",
            color: "#FFFFFF",
          },
        },
      }}
    />
  );
}
