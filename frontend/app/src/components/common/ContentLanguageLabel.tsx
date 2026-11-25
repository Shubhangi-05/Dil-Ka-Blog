import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { SupportedLanguage } from "../../features/blog/types/translation.types";

interface ContentLanguageLabelProps {
  language: SupportedLanguage;
}

const languageNames: Record<SupportedLanguage, string> = {
  en: "English",
  hi: "हिंदी",
};

function ContentLanguageLabel({
  language,
}: ContentLanguageLabelProps) {
  const { t } = useTranslation();

  return (
    <Chip
      size="small"
      variant="outlined"
      label={`${languageNames[language]} · ${t("contentLanguage.original")}`}
    />
  );
}

export default ContentLanguageLabel;