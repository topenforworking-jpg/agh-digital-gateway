import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select value={i18n.language} onValueChange={changeLanguage}>
      <SelectTrigger className="w-[130px] h-9 gap-2">
        <Languages className="h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">Français</SelectItem>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ar">العربية</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
