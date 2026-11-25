
import { useTranslation } from "react-i18next";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage ?? "en";

  const handleLanguageChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLanguage: string | null
  ) => {
    if (newLanguage) {
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <ToggleButtonGroup
      value={currentLanguage}
      exclusive
      onChange={handleLanguageChange}
      size="small"
      aria-label="Select language"
    >
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="hi">हि</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default LanguageSwitcher;
