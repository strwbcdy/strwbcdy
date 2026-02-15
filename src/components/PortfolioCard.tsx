import { useState, useRef } from "react";
import { PortfolioItem } from "src/types/Portfolio";
// import { usePortal } from "src/providers/PortalProvider";
import { useDetailModal } from "src/providers/DetailModalProvider";
import { getAssetPath } from "src/utils/assetPath"
import PortfolioCardPure from "./PortfolioCardPure";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  // const setPortal = usePortal();
  const { setDetailType } = useDetailModal();
  const elementRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // useEffect(() => {
  //   if (isHovered) {
  //     setPortal(elementRef.current, item);
  //   }
  // }, [isHovered, item, setPortal]);

  const handleClick = () => {
    setDetailType({ portfolioItem: item, id: item.id });
  };

  const handleImageError = () => {
    setImageError(true);
    if (process.env.NODE_ENV === 'development') {
      console.error(`Failed to load image: ${item.image}`);
    }
  };

  const imageSrc = imageError ? getAssetPath("/images/placeholder.svg") : item.image;

  return (
    <PortfolioCardPure
      ref={elementRef}
      handleHover={setIsHovered}
      handleClick={handleClick}
      src={imageSrc}
      title={item.title}
      tags={item.tags}
      onImageError={handleImageError}
    />
  );
}
