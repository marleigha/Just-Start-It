interface StyleObject {
  aside: string;
  asideScrollbars: string;
  asideBrand: string;
  asideMenuItem: string;
  asideMenuItemActive: string;
  asideMenuDropdown: string;
  navBarItemLabel: string;
  navBarItemLabelHover: string;
  navBarItemLabelActiveColor: string;
  overlay: string;
  activeLinkColor: string;
  bgLayoutColor: string;
  iconsColor: string;
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

export const basic: StyleObject = {
  aside: 'bg-gray-800 lg:rounded-2xl',
  asideScrollbars: 'aside-scrollbars-gray',
  asideBrand: 'bg-gray-900 text-white',
  asideMenuItem: 'text-gray-300 hover:text-white',
  asideMenuItemActive: 'font-bold text-white',
  asideMenuDropdown: 'bg-gray-700/50',
  navBarItemLabel: 'text-black',
  navBarItemLabelHover: 'hover:text-blue-500',
  navBarItemLabelActiveColor: 'text-blue-600',
  overlay: 'from-gray-700 via-gray-900 to-gray-700',
  activeLinkColor: 'bg-gray-100/70',
  bgLayoutColor: 'bg-gray-50',
  iconsColor: 'text-blue-500',
  cardsColor: 'bg-white',
  focusRingColor:
    'focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none dark:focus:ring-blue-600 border-gray-300 dark:focus:border-blue-600',
  corners: 'rounded',
  cardsStyle: 'bg-white border border-pavitra-400',
  linkColor: 'text-black',
  websiteHeder: '',
  borders: '',
  shadow: '',
  websiteSectionStyle: '',
  textSecondary: '',
};

export const white: StyleObject = {
  aside: 'bg-white dark:text-white  lg:rounded-2xl',
  asideScrollbars: 'aside-scrollbars-light',
  asideBrand: '',
  asideMenuItem:
    'text-gray-700 hover:bg-gray-100/70 dark:text-dark-500 dark:hover:text-white dark:hover:bg-dark-800',
  asideMenuItemActive: 'font-bold text-black dark:text-white',
  asideMenuDropdown: 'bg-gray-100/75',
  navBarItemLabel: 'text-blue-600',
  navBarItemLabelHover: 'hover:text-black',
  navBarItemLabelActiveColor: 'text-black',
  overlay: 'from-white via-gray-100 to-white',
  activeLinkColor: 'bg-gray-100/70',
  bgLayoutColor: 'bg-gray-50',
  iconsColor: 'text-blue-500',
  cardsColor: 'bg-white',
  focusRingColor:
    'focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none border-gray-300 dark:focus:ring-blue-600 dark:focus:border-blue-600',
  corners: 'rounded',
  cardsStyle: 'bg-white border border-pavitra-400',
  linkColor: 'text-blue-600',
  websiteHeder: 'border-b border-gray-200',
  borders: 'border-gray-200',
  shadow: '',
  websiteSectionStyle: '',
  textSecondary: 'text-gray-500',
};

export const neonGreenTheme: StyleObject = {
  aside:
    'bg-neonGreenTheme-800 text-neonGreenTheme-text dark:text-white  border-r border-neonGreenTheme-outsideCardColor',
  asideScrollbars: 'aside-scrollbars-blue',
  asideBrand: 'text-blue-500 bg-white',
  asideMenuItem:
    'text-neonGreenTheme-text  hover:text-neonGreenTheme-buttonColor dark:text-dark-500 dark:hover:text-white dark:hover:bg-dark-800 dark:text-white',
  asideMenuItemActive: 'font-bold text-black dark:text-white',
  activeLinkColor: 'bg-neonGreenTheme-buttonColor rounded-full text-black',
  asideMenuDropdown: 'bg-blue-700/50',
  navBarItemLabel: 'text-primaryText',
  iconsColor: 'text-neonGreenTheme-iconsColor dark:text-blue-500',
  navBarItemLabelHover: 'hover:text-stone-400',
  navBarItemLabelActiveColor: 'text-neonGreenTheme-800',
  overlay: 'bg-neonGreenTheme-mainBG',
  bgLayoutColor: 'bg-neonGreenTheme-mainBG',
  cardsColor: 'bg-neonGreenTheme-cardColor',
  focusRingColor:
    'focus:ring focus:ring-neonGreenTheme-800 focus:border-neonGreenTheme-800 focus:outline-none dark:focus:ring-blue-600 border-stone-600 dark:focus:border-blue-600 ',
  corners: 'rounded-full',
  cardsStyle: 'bg-neonGreenTheme-outsideCardColor rounded-3xl ',
  linkColor: 'text-neonGreenTheme-buttonColor',
  websiteHeder: 'border-b border-white border-opacity-10 ',
  borders: 'border-white border-opacity-10',
  shadow: '',
  websiteSectionStyle: ' bg-neonGreenTheme-webSiteComponentBg text-white',
  textSecondary: 'text-gray-200',
};

export const dataGridStyles = {
  '& .MuiDataGrid-cell': {
    paddingX: 3,
    border: 'none',
  },
  '& .MuiDataGrid-columnHeader': {
    paddingX: 3,
  },
  '& .MuiDataGrid-columnHeaderCheckbox': {
    paddingX: 0,
  },
  '& .MuiDataGrid-columnHeaders': {
    paddingY: 4,
    borderStartStartRadius: 7,
    borderStartEndRadius: 7,
  },
  '& .MuiDataGrid-footerContainer': {
    paddingY: 0.5,
    borderEndStartRadius: 7,
    borderEndEndRadius: 7,
  },
  '& .MuiDataGrid-root': {
    border: 'none',
  },
};
