import devLensLogo from 'src/assets/logo-devlens.svg';
import styleSpyLogo from 'src/assets/logo-style-spy.svg';
import speedBoostLogo from 'src/assets/logo-speed-boost.svg';
import jsonWizardLogo from 'src/assets/logo-json-wizard.svg';
import tabMasterProLogo from 'src/assets/logo-tab-master-pro.svg';
import viewportBuddyLogo from 'src/assets/logo-viewport-buddy.svg';
import markupNotesLogo from 'src/assets/logo-markup-notes.svg';
import gridGuidesLogo from 'src/assets/logo-grid-guides.svg';
import palettePickerLogo from 'src/assets/logo-palette-picker.svg';
import linkCheckerLogo from 'src/assets/logo-link-checker.svg';
import domSnapshotLogo from 'src/assets/logo-dom-snapshot.svg';
import consolePlusLogo from 'src/assets/logo-console-plus.svg';

let data  = [
  {
    id: 1,
    logo: devLensLogo,
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true
  },
  {
    id: 2,
    logo: styleSpyLogo,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true
  },
  {
    id: 3,
    logo: speedBoostLogo,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false
  },
  {
    id: 4,
    logo: jsonWizardLogo,
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true
  },
  {
    id: 5,
    logo: tabMasterProLogo,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true
  },
  {
    id: 6,
    logo: viewportBuddyLogo,
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    isActive: false
  },
  {
    id: 7,
    logo: markupNotesLogo,
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true
  },
  {
    id: 8,
    logo: gridGuidesLogo,
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false
  },
  {
    id: 9,
    logo: palettePickerLogo,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true
  },
  {
    id: 10,
    logo: linkCheckerLogo,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true
  },
  {
    id: 11,
    logo: domSnapshotLogo,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false
  },
  {
    id: 12,
    logo: consolePlusLogo,
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    isActive: true
  }
];

export default data;