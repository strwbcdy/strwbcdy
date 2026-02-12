import { ReactNode, useState, useCallback } from "react";
import { PortfolioItem } from "src/types/Portfolio";
import createSafeContext from "src/lib/createSafeContext";

export interface PortalConsumerProps {
  setPortal: (anchor: HTMLElement | null, item: PortfolioItem | null) => void;
}
export interface PortalDataConsumerProps {
  anchorElement: HTMLElement | null;
  miniModalMediaData: PortfolioItem | null;
}

export const [usePortal, Provider] =
  createSafeContext<PortalConsumerProps["setPortal"]>();

export const [usePortalData, PortalDataProvider] =
  createSafeContext<PortalDataConsumerProps>();

export default function PortalProvider({ children }: { children: ReactNode }) {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const [miniModalMediaData, setMiniModalMediaData] = useState<PortfolioItem | null>(
    null
  );

  const handleChangePortal = useCallback(
    (anchor: HTMLElement | null, item: PortfolioItem | null) => {
      setAnchorElement(anchor);
      setMiniModalMediaData(item);
    },
    []
  );

  return (
    <Provider
      value={handleChangePortal}
    >
      <PortalDataProvider
        value={{
          anchorElement,
          miniModalMediaData,
        }}
      >
        {children}
      </PortalDataProvider>
    </Provider>
  );
}
