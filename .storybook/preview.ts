import type { Preview } from "@storybook/react-vite";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    
    // 여기에 직접 backgrounds를 추가합니다.
    // backgrounds: {
    //   options: {
    //     "pink-ish": { name: "pink-ish", value: "#ef09c1" },
    //     light: { name: "light", value: "#F8F8F8" },
    //     dark: { name: "dark", value: "#333333" }
    //   }
    // },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "pink-ish",
    },
  },
};

export default preview;
