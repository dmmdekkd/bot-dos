import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。

import DiscordLink from "./components/DiscordLink.js";
import GitHubLink from "./components/GitHubLink.js";
import TwitterLink from "./components/TwitterLink.js";
import WeChatLink from "./components/WeChatLink.js";

const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./components/HeroHitokoto.vue'));
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./components/CommentHideBtn.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));
const PreviewImage = defineAsyncComponent(() => import('./components/PreviewImage.vue'));
const HeroContent = defineAsyncComponent(() => import('./components/HeroContent.vue'));
const yx = defineAsyncComponent(() => import('./components/yx.vue'));
const jz = defineAsyncComponent(() => import('./components/jz.vue'));
const 播放 = defineAsyncComponent(() => import('./components/播放.vue'));

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyIcon', MyIcon);
    app.component("DiscordLink", DiscordLink);
    app.component("GitHubLink", GitHubLink);
    app.component("TwitterLink", TwitterLink);
    app.component("WeChatLink", WeChatLink);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    jz,
    yx,
    HeroContent,
    TopNavBeautify,
    HeroHitokoto,
    NavMusic,
    BlogBeautify,
    PreviewImage,
    // ...
  ],
});
