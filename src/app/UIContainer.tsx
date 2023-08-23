"use client";
import React from "react";
import { UIProvider } from "@/context/ui";

interface Props {
  children?: React.ReactNode;
}

export const UIContainer: React.FC<Props> = ({ children }) => {
  return <UIProvider>{children}</UIProvider>;
};
