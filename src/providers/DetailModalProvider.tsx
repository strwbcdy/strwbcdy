import { ReactNode, useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { INITIAL_DETAIL_STATE } from "src/constant";
import createSafeContext from "src/lib/createSafeContext";
import { PortfolioItem } from "src/types/Portfolio";

interface DetailType {
  id?: string;
  portfolioItem?: PortfolioItem;
}

const [useDetailModal, Provider] = createSafeContext<any>();
export { useDetailModal };

export default function DetailModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const location = useLocation();
  const [detail, setDetail] = useState<DetailType>(INITIAL_DETAIL_STATE);

  const handleChangeDetail = useCallback(
    (newDetail: { id?: string; portfolioItem?: PortfolioItem }) => {
      if (newDetail.portfolioItem) {
        setDetail(newDetail);
      } else {
        setDetail(INITIAL_DETAIL_STATE);
      }
    },
    []
  );

  useEffect(() => {
    setDetail(INITIAL_DETAIL_STATE);
  }, [location.pathname, setDetail]);

  return (
    <Provider value={{ detail, setDetailType: handleChangeDetail }}>
      {children}
    </Provider>
  );
}
