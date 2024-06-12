"use client";

import { RecoilRoot } from "recoil";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
