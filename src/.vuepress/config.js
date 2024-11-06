import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      notice: [
        {
          path: "/",
          title: "Notice Title",
          content: "Notice Content",
          actions: [
            {
              text: "Primary Action",
              link: "https://theme-hope.vuejs.press/",
              type: "primary",
            },
            { text: "Default Action" },
          ],
        },
        {
          path: "/zh/",
          title: "Notice Title",
          content: "Notice Content",
          actions: [
            {
              text: "Primary Action",
              link: "https://theme-hope.vuejs.press/",
              type: "primary",
            },
            { text: "Default Action" },
          ],
        },
      ],
    },
  }),
};