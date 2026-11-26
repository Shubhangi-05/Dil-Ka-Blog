
import { Box, Typography, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const PageContainer = styled(Box)({
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  padding: "0 32px",
  "@media (max-width: 600px)": {
    padding: "0 18px",
  },
});

export const HeaderRoot = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

export const HeaderContainer = styled(PageContainer)({
  minHeight: 76,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 24,
  flexWrap: "wrap",
});

export const BrandLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 21,
  fontWeight: 800,
  letterSpacing: "-0.8px",
  textDecoration: "none",
}));

export const Navigation = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 25,
  flexWrap: "wrap",
});

export const NavigationLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  padding: "88px 0",
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const HeroInner = styled(PageContainer)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 22,
});

export const Eyebrow = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "1.8px",
  textTransform: "uppercase",
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  maxWidth: 850,
  fontWeight: 800,
  letterSpacing: "-2px",
  lineHeight: 1.12,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    letterSpacing: "-1px",
  },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 650,
  fontSize: 18,
  lineHeight: 1.8,
  color: theme.palette.text.secondary,
}));

export const PrimaryButton = styled(Button)({
  borderRadius: 7,
  padding: "11px 22px",
  fontWeight: 700,
  textTransform: "none",
});

export const Section = styled(Box)({
  padding: "64px 0",
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: "-0.7px",
  marginBottom: 28,
  color: theme.palette.text.primary,
}));

export const FeaturedCard = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: 36,
  padding: 32,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 12,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const ArticleGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 24,
  "@media (max-width: 650px)": {
    gridTemplateColumns: "1fr",
  },
});

export const ArticleCardRoot = styled(Box)(({ theme }) => ({
  padding: 24,
  display: "flex",
  flexDirection: "column",
  gap: 14,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 10,
  backgroundColor: theme.palette.background.paper,
  transition: "transform 160ms ease, box-shadow 160ms ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: theme.shadows[3],
  },
}));

export const ArticleTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 750,
  letterSpacing: "-0.5px",
  lineHeight: 1.35,
  color: theme.palette.text.primary,
}));

export const ArticleExcerpt = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
}));

export const ArticleImage = styled("img")({
  width: "100%",
  aspectRatio: "16 / 9",
  objectFit: "cover",
  borderRadius: 8,
});

export const TagList = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
});

export const ContentLayout = styled(Box)({
  display: "grid",
  gridTemplateColumns: "minmax(0, 760px) minmax(180px, 1fr)",
  gap: 60,
  "@media (max-width: 850px)": {
    gridTemplateColumns: "1fr",
    gap: 32,
  },
});

export const ArticleBody = styled(Typography)(({ theme }) => ({
  fontSize: 17,
  lineHeight: 2,
  color: theme.palette.text.primary,
  whiteSpace: "pre-wrap",
  overflowWrap: "anywhere",
}));

export const Sidebar = styled(Box)(({ theme }) => ({
  borderLeft: `1px solid ${theme.palette.divider}`,
  paddingLeft: 24,
  "@media (max-width: 850px)": {
    borderLeft: 0,
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingLeft: 0,
    paddingTop: 24,
  },
}));

export const FooterRoot = styled(Box)({
  marginTop: 50,
  padding: "48px 0 24px",
  backgroundColor: "#171D29",
  color: "#FFFFFF",
});

export const FooterGrid = styled(PageContainer)({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: 40,
  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
  },
});

export const FooterBottom = styled(PageContainer)({
  marginTop: 40,
  paddingTop: 20,
  borderTop: "1px solid rgba(255,255,255,0.15)",
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  flexWrap: "wrap",
});

export const footerLinkStyles = {
  color: "#B8C0CC",
  textDecoration: "none",
  transition: "color 0.2s ease",

  "&:hover": {
    color: "#FFFFFF",
  },

  "&.active": {
    color: "#64B5F6",
    fontWeight: 700,
  },
};
