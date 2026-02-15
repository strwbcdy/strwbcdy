import { PureComponent, ForwardedRef, forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
    this.props.handleHover(true);
  };

  handleMouseLeave = () => {
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
        sx={{
          position: "relative",
          width: "100%",
          cursor: "pointer",
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.props.handleClick}
      >
        <Box
          ref={this.props.innerRef}
          sx={{
            position: "relative",
            width: "100%",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: isHovered ? 10 : 1,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transformOrigin: transformOrigin,
            "&:hover": {
              "& .card-overlay": {
                opacity: 1,
              },
            },
          }}
        >
          {/* Image Container - Vertical aspect ratio */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "150%", // 2:3 aspect ratio for vertical cards
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: isHovered 
                ? "0 8px 24px rgba(0, 0, 0, 0.8)" 
                : "0 2px 8px rgba(0, 0, 0, 0.4)",
              transition: "box-shadow 0.3s ease",
            }}
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
              }}
            />
            
            {/* Gradient overlay for better text readability */}
            <Box
              className="card-overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%",
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)",
                opacity: isHovered ? 1 : 0.7,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }}
            />
          </Box>

          {/* Title - Always visible */}
          <Box
            sx={{
              mt: 1.5,
              px: 0.5,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: "0.875rem",
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {this.props.title}
            </Typography>
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
