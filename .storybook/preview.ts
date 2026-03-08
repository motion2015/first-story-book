import React from "react";
import type { Preview, StoryContext } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";

const withTheme = (Story: () => React.ReactNode, context: StoryContext) => {
  // 1. 배경색 값을 가져옵니다. (없을 경우 default인 'light'의 값을 수동 지정하거나 비워둠)
  const bgValue = context.globals.backgrounds?.value;

  // 2. 판정 로직 강화: 값이 '#333333'이거나 이름이 'dark'인 경우 모두 체크
  const isDark = bgValue === "#333333" || bgValue === "dark";

  // 2. 글자색 결정 (다크면 흰색, 아니면(라이트/초기값/핑크색 등) 무조건 검은색)
  const textColor = isDark ? "#ffffff" : "#333333";

  // 3. 클래스와 스타일을 동시에 주입하여 확실하게 보이게 만듭니다.
  return React.createElement(
    "div",
    {
      className: isDark ? "dark" : "light",
      style: {
        color: textColor, // 여기서 직접 꽂아주는 게 가장 강력합니다.
        //minHeight: "100vh",
        width: "100%",
      },
    },
    React.createElement(BrowserRouter, null, React.createElement(Story)),
  );
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#F8F8F8" },
        { name: "dark", value: "#333333" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // decorators 순서를 하나로 정리하여 실행 흐름을 단순화합니다.
  decorators: [withTheme],
};

export default preview;
