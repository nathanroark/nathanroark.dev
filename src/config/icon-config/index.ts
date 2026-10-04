import { LanguageIcons } from "@/config/icon-config/languages";
import { MachineLearningIcons } from "@/config/icon-config/machine-learning";
import { ComputerVisionIcons } from "@/config/icon-config/computer-vision";
import { FrameworkIcons } from "@/config/icon-config/frameworks";
import { ToolIcons } from "@/config/icon-config/tools";
import { ProtocolIcons } from "@/config/icon-config/protocols";

export const IconConfig: Record<string, string> = {
  ...LanguageIcons,
  ...MachineLearningIcons,
  ...ComputerVisionIcons,
  ...FrameworkIcons,
  ...ToolIcons,
  ...ProtocolIcons,
};
