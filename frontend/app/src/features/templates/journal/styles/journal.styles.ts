
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Button, Card } from "@mui/material";

export const JournalPage = styled(Box)({
  minHeight: "100vh",
  background: "#FAF8F4",
  color: "#292724",
});

export const JournalContainer = styled(Container)({
  maxWidth: "1120px !important",
});

export const JournalHeaderRoot = styled(Box)({
  borderBottom: "1px solid #EAE5DC",
  background: "#FAF8F4",
});

export const JournalHeaderInner = styled(JournalContainer)({
  minHeight: 82,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 24,
  flexWrap: "wrap",
  paddingTop: 16,
  paddingBottom: 16,
});

export const JournalBrand = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "1.55rem",
  fontWeight: 700,
  color: "#292724",
  textDecoration: "none",
  letterSpacing: "-0.5px",
});

export const JournalNav = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 28,
  flexWrap: "wrap",
});

export const JournalNavLink = styled("a")({
  color: "#716A62",
  textDecoration: "none",
  fontSize: "0.9rem",
  transition: "color 0.2s ease",
  "&:hover": {
    color: "#B8755D",
  },
});

export const JournalHeroRoot = styled(Box)({
  padding: "88px 0 76px",
  borderBottom: "1px solid #EAE5DC",
  "@media (max-width: 600px)": {
    padding: "58px 0 48px",
  },
});

export const JournalEyebrow = styled(Typography)({
  color: "#B8755D",
  fontSize: "0.76rem",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  marginBottom: 20,
});

export const JournalHeroTitle = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
  fontWeight: 400,
  lineHeight: 1.12,
  letterSpacing: "-2px",
  maxWidth: 780,
  marginBottom: 24,
  color: "#292724",
});

export const JournalHeroDescription = styled(Typography)({
  color: "#716A62",
  fontSize: "1.08rem",
  lineHeight: 1.9,
  maxWidth: 650,
});

export const JournalSection = styled(Box)({
  padding: "68px 0",
  "@media (max-width: 600px)": {
    padding: "44px 0",
  },
});

export const JournalSectionTitle = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "2rem",
  fontWeight: 400,
  marginBottom: 30,
  color: "#292724",
});

export const JournalFeaturedCard = styled(Card)({
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
  background: "#F1EDE5",
  borderRadius: 4,
  boxShadow: "none",
  overflow: "hidden",
  "@media (max-width: 760px)": {
    gridTemplateColumns: "1fr",
  },
});

export const JournalFeaturedImage = styled("img")({
  width: "100%",
  height: "100%",
  minHeight: 340,
  objectFit: "cover",
  "@media (max-width: 760px)": {
    minHeight: 230,
    maxHeight: 300,
  },
});

export const JournalFeaturedContent = styled(Box)({
  padding: "clamp(24px, 5vw, 52px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const JournalPostGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 36,
  "@media (max-width: 700px)": {
    gridTemplateColumns: "1fr",
    gap: 28,
  },
});

export const JournalPostCardRoot = styled(Box)({
  minWidth: 0,
});

export const JournalPostImage = styled("img")({
  display: "block",
  width: "100%",
  aspectRatio: "16 / 10",
  objectFit: "cover",
  marginBottom: 20,
  background: "#EAE5DC",
});

export const JournalPostTitle = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "1.55rem",
  fontWeight: 400,
  lineHeight: 1.35,
  color: "#292724",
  margin: "10px 0",
});

export const JournalPostExcerpt = styled(Typography)({
  color: "#716A62",
  lineHeight: 1.85,
  fontSize: "0.96rem",
});

export const JournalMeta = styled(Typography)({
  color: "#9A9085",
  fontSize: "0.78rem",
  letterSpacing: "0.5px",
});

export const JournalTextLink = styled("a")({
  display: "inline-block",
  color: "#B8755D",
  fontWeight: 600,
  fontSize: "0.9rem",
  textDecoration: "none",
  marginTop: 18,
  cursor: "pointer",
  "&:hover": {
    color: "#8E523F",
  },
});

export const JournalPrimaryButton = styled(Button)({
  background: "#B8755D",
  color: "#FFFFFF",
  borderRadius: 2,
  padding: "11px 24px",
  textTransform: "none",
  fontWeight: 600,
  "&:hover": {
    background: "#965B48",
  },
});

export const JournalArticleLayout = styled(Box)({
  display: "grid",
  gridTemplateColumns: "minmax(0, 760px) minmax(180px, 1fr)",
  gap: 64,
  padding: "64px 0 90px",
  "@media (max-width: 850px)": {
    gridTemplateColumns: "1fr",
    gap: 32,
  },
});

export const JournalArticleBody = styled(Typography)({
  fontSize: "1.05rem",
  lineHeight: 2,
  color: "#49443E",
  whiteSpace: "pre-wrap",
  overflowWrap: "anywhere",
});

export const JournalSidebar = styled(Box)({
  borderLeft: "1px solid #EAE5DC",
  paddingLeft: 24,
  "@media (max-width: 850px)": {
    borderLeft: 0,
    borderTop: "1px solid #EAE5DC",
    paddingLeft: 0,
    paddingTop: 24,
  },
});

export const JournalFooterRoot = styled(Box)({
  background: "#292724",
  color: "#FAF8F4",
  padding: "52px 0 24px",
});

export const JournalFooterGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: 40,
  paddingBottom: 40,
  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
  },
});

export const JournalFooterBottom = styled(Box)({
  borderTop: "1px solid #514C46",
  paddingTop: 20,
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  flexWrap: "wrap",
});

export const JournalAboutText = styled(Typography)({
  maxWidth: 760,
  color: "#625B53",
  fontSize: "1.05rem",
  lineHeight: 2,
  whiteSpace: "pre-wrap",
});
