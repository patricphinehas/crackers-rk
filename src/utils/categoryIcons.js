import {
  Sparkles,
  Rocket,
  RefreshCw,
  Flame,
  Zap,
  Gift,
} from 'lucide-react';

export const CATEGORY_ICON_MAP = {
  Sparkles,
  Rocket,
  RefreshCw,
  Flame,
  Zap,
  Gift,
};

export function getCategoryIconComponent(iconName) {
  return CATEGORY_ICON_MAP[iconName] || Sparkles;
}
