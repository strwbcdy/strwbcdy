import { PureComponent, ForwardedRef, forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

type PortfolioCardPureType = {
  src: string;
  title: string;
  tags: string[];
  innerRef: ForwardedRef<HTMLDivElement>;
  handleHover: (value: boolean) => void;
  handleClick?: () => void;
  onImageError: () => void;
  isFirst?: boolean;
  isLast?: boolean;
};

class PortfolioCardPure extends PureComponent<PortfolioCardPureType> {
  state = {
    isHovered: false,
  };

  handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ isHovered: true });
    this.props.handleHover(true);
  };

  handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ isHovered: false });
    this.props.handleHover(false);
  };

  render() {
    const { isFirst, isLast } = this.props;
    const { isHovered } = this.state;
    
    let transformOrigin = "center center";
    if (isFirst) transformOrigin = "left center";
    if (isLast) transformOrigin = "right center";

    return (
      <Box
        ref={this.props.innerRef}
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "calc(9 / 16 * 100%)",
          borderRadius: "4px",
          overflow: "hidden",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, z-index 0s",
          zIndex: isHovered ? 10 : 1,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transformOrigin: transformOrigin,
          boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.6)" : "none",
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.props.handleClick}
      >
        <Box
          component="img"
          src={this.props.src}
          alt={this.props.title}
          onError={this.props.onImageError}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 40%, transparent 100%)",
            padding: "16px 12px 12px",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: "0.9rem",
              mb: 1,
              lineHeight: 1.2,
            }}
          >
            {this.props.title}
          </Typography>
          <Box sx={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {this.props.tags.slice(0, 2).map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  height: "22px",
                  fontSize: "0.7rem",
                  bgcolor: "rgba(255, 255, 255, 0.25)",
                  color: "white",
                  fontWeight: 600,
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  "& .MuiChip-label": {
                    padding: "0 8px",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}

const PortfolioCardRef = forwardRef<
  HTMLDivElement,
  Omit<PortfolioCardPureType, "innerRef">
>((props, ref) => <PortfolioCardPure {...props} innerRef={ref} />);
PortfolioCardRef.displayName = "PortfolioCardRef";

export default PortfolioCardRef;
