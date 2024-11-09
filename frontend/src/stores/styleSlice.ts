import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as styles from '../styles';
import { localStorageDarkModeKey, localStorageStyleKey } from '../config';
import { StyleKey } from '../interfaces';

interface StyleState {
  asideStyle: string;
  asideScrollbarsStyle: string;
  asideBrandStyle: string;
  asideMenuItemStyle: string;
  asideMenuItemActiveStyle: string;
  asideMenuDropdownStyle: string;
  navBarItemLabelStyle: string;
  navBarItemLabelHoverStyle: string;
  navBarItemLabelActiveColorStyle: string;
  overlayStyle: string;
  darkMode: boolean;
  bgLayoutColor: string;
  iconsColor: string;
  activeLinkColor: string;
  cardsColor: string;
  focusRingColor: string;
  corners: string;
  cardsStyle: string;
  linkColor: string;
  websiteHeder: string;
  borders: string;
  shadow: string;
  websiteSectionStyle: string;
  textSecondary: string;
}

const initialState: StyleState = {
  asideStyle: styles.neonGreenTheme.aside,
  asideScrollbarsStyle: styles.white.asideScrollbars,
  asideBrandStyle: styles.white.asideBrand,
  asideMenuItemStyle: styles.neonGreenTheme.asideMenuItem,
  asideMenuItemActiveStyle: styles.neonGreenTheme.asideMenuItemActive,
  activeLinkColor: styles.neonGreenTheme.activeLinkColor,
  asideMenuDropdownStyle: styles.white.asideMenuDropdown,
  navBarItemLabelStyle: styles.neonGreenTheme.navBarItemLabel,
  navBarItemLabelHoverStyle: styles.neonGreenTheme.navBarItemLabelHover,
  navBarItemLabelActiveColorStyle:
    styles.neonGreenTheme.navBarItemLabelActiveColor,
  overlayStyle: styles.neonGreenTheme.overlay,
  darkMode: false,
  bgLayoutColor: styles.neonGreenTheme.bgLayoutColor,
  iconsColor: styles.neonGreenTheme.iconsColor,
  cardsColor: styles.neonGreenTheme.cardsColor,
  focusRingColor: styles.neonGreenTheme.focusRingColor,
  corners: styles.neonGreenTheme.corners,
  cardsStyle: styles.neonGreenTheme.cardsStyle,
  linkColor: styles.neonGreenTheme.linkColor,
  websiteHeder: styles.neonGreenTheme.websiteHeder,
  borders: styles.neonGreenTheme.borders,
  shadow: styles.neonGreenTheme.shadow,
  websiteSectionStyle: styles.neonGreenTheme.websiteSectionStyle,
  textSecondary: styles.neonGreenTheme.textSecondary,
};

export const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean | null>) => {
      state.darkMode =
        action.payload !== null ? action.payload : !state.darkMode;

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(
          localStorageDarkModeKey,
          state.darkMode ? '1' : '0',
        );
      }

      if (typeof document !== 'undefined') {
        document.body.classList[state.darkMode ? 'add' : 'remove'](
          'dark-scrollbars',
        );

        document.documentElement.classList[state.darkMode ? 'add' : 'remove'](
          'dark-scrollbars-compat',
        );
      }
    },

    setStyle: (state, action: PayloadAction<StyleKey>) => {
      if (!styles[action.payload]) {
        return;
      }

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(localStorageStyleKey, action.payload);
      }

      const style = styles[action.payload];

      for (const key in style) {
        state[`${key}Style`] = style[key];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode, setStyle } = styleSlice.actions;

export default styleSlice.reducer;
