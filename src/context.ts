import { createContext } from '@builder.io/qwik';
import type { ThemePreference } from './components/toggle/theme';

export interface SiteStore {
  theme: ThemePreference | 'auto';
}

export const GlobalStore = createContext<SiteStore>('site-store');