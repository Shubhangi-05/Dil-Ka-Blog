
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

// Header styles
export const HeaderRoot = styled("header")(({ theme }) => ({
  width: "100%",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1100px",
  margin: "0 auto",
  padding: theme.spacing(2, 3),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    gap: theme.spacing(2),
  },
}));

export const BlogName = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  fontSize: "24px",
  fontWeight: 500,
  whiteSpace: "nowrap",
}));

export const Navigation = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    order: 3,
    width: "100%",
    justifyContent: "center",
    gap: theme.spacing(2),
  },
}));

export const NavigationLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  fontSize: "15px",
  fontWeight: 500,

  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const LanguageContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const LanguageButton = styled(Button)(({ theme }) => ({
  minWidth: "38px",
  padding: "6px 10px",
  borderRadius: "7px",
  backgroundColor: theme.palette.text.primary,
  color: "#FFFFFF",

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

// Hero styles
export const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(6, 2, 5),
  maxWidth: "850px",
  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5, 2, 4),
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "15px",
  marginBottom: theme.spacing(2),
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "42px",
  fontWeight: 500,
  lineHeight: 1.5,
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "17px",
  lineHeight: 1.8,
  marginBottom: theme.spacing(3),
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#FFFFFF",
  padding: "11px 25px",
  borderRadius: "8px",
  fontSize: "15px",
  fontWeight: 600,
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#963218",
  },
}));

export const FeaturedPostSection = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(8, 3),
}));

export const FeaturedPostCard = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(6),
  alignItems: "center",
  backgroundColor: "#F3EDE4",
  borderRadius: "16px",
  padding: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    padding: theme.spacing(3),
  },
}));

export const FeaturedPostLabel = styled(Typography)({
  color: "#B83E1C",
  fontSize: "0.85rem",
  fontWeight: 700,
  letterSpacing: "2px",
  marginBottom: "16px",
});

export const FeaturedPostTitle = styled(Typography)({
  fontFamily: "'Noto Serif Devanagari', serif",
  fontSize: "2rem",
  fontWeight: 600,
  lineHeight: 1.6,
  marginBottom: "16px",
});

export const FeaturedPostExcerpt = styled(Typography)({
  color: "#81756C",
  fontSize: "1rem",
  lineHeight: 1.9,
  marginBottom: "24px",
});

export const FeaturedPostImage = styled(Box)({
  minHeight: "280px",
  borderRadius: "12px",
  background:
    "linear-gradient(135deg, #D9BFA5 0%, #B88F73 50%, #805D4B 100%)",
});

export const RecentPostsSection = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(4, 3, 8),
}));

export const RecentPostsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const RecentPostCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: `${theme.shape.borderRadius} * 1.5`,
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const RecentPostTitle = styled(Typography)({
  fontFamily: "'Noto Serif Devanagari', serif",
  fontSize: "1.25rem",
  fontWeight: 600,
  lineHeight: 1.7,
});

export const AboutCategoriesSection = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(4, 3, 8),
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr",
  gap: theme.spacing(6),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
  },
}));

export const AboutCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#F3EDE4",
  borderRadius: "16px",
}));

export const CategoryList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2),
}));

export const PoetryFooterRoot = styled(Box)(({ theme }) => ({
  backgroundColor: "#211B18",
  color: "#FCF9F5",
  padding: theme.spacing(6, 3, 3),
}));

export const PoetryFooterContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const PoetryFooterBottom = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: `${theme.spacing(5)} auto 0`,
  paddingTop: theme.spacing(3),
  borderTop: "1px solid rgba(255,255,255,0.15)",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(2),
}));
export const PostPageContainer = styled(Box)(({ theme }) => ({
  maxWidth: "850px",
  margin: "0 auto",
  padding: theme.spacing(8, 3),
}));

export const PostTitle = styled(Typography)({
  fontFamily: "'Noto Serif Devanagari', serif",
  fontSize: "2.5rem",
  fontWeight: 600,
  lineHeight: 1.6,
  marginBottom: "20px",
});

export const PostContent = styled(Typography)({
  fontFamily: "'Noto Serif Devanagari', serif",
  fontSize: "1.2rem",
  lineHeight: 2.3,
  whiteSpace: "pre-line",
});

export const AllPostsContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(8, 3),
}));

export const AllPostsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing(3),
  marginTop: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));
export const AboutPageContainer = styled(Box)(({ theme }) => ({
  maxWidth: "900px",
  margin: "0 auto",
  padding: theme.spacing(8, 3),
}));

export const AboutPageTitle = styled(Typography)({
  fontFamily: "'Noto Serif Devanagari', serif",
  fontSize: "2.5rem",
  fontWeight: 600,
  lineHeight: 1.6,
  marginBottom: "24px",
});

export const AboutPageContent = styled(Typography)({
  fontFamily: "'Noto Serif Devanagari', serif",
  fontSize: "1.1rem",
  lineHeight: 2.2,
  whiteSpace: "pre-line",
});