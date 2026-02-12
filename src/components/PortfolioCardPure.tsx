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
};

class PortfolioCardPure extends PureComponent<PortfolioCardPureType> {
  render() {
    return (
      <div
        ref={this.props.innerRef}
        style={{
          zIndex: 9,
          cursor: "pointer",
          borderRadius: "4px",
          width: "100%",
          position: "relative",
          paddingTop: "calc(9 / 16 * 100%)",
          transition: "transform 0.3s ease",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.zIndex = "10";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.zIndex = "9";
        }}
      >
        <img
          src={this.props.src}
          alt={this.props.title}
          style={{
            top: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            borderRadius: "4px",
          }}
          onClick={this.props.handleClick}
          onPointerEnter={() => {
            this.props.handleHover(true);
          }}
          onPointerLeave={() => {
            this.props.handleHover(false);
          }}
          onError={this.props.onImageError}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)",
            padding: "16px 12px 12px",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
            opacity: 0,
            transition: "opacity 0.3s ease",
            "&:hover": {
              opacity: 1,
            },
          }}
          className="card-overlay"
        >
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: "0.9rem",
              marginBottom: "8px",
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
                  backgroundColor: "rgba(255,255,255,0.25)",
                  color: "white",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.3)",
                  "& .MuiChip-label": {
                    padding: "0 8px",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </div>
    );
  }
}

const PortfolioCardRef = forwardRef<
  HTMLDivElement,
  Omit<PortfolioCardPureType, "innerRef">
>((props, ref) => <PortfolioCardPure {...props} innerRef={ref} />);
PortfolioCardRef.displayName = "PortfolioCardRef";

export default PortfolioCardRef;
