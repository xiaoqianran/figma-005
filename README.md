# Watch Me UI Kit — Figma 复刻 + 可交互原型

> **目标**：使用 figma-mcp-go 从 Figma「Watch Me - UI kit」Dark Theme 页面精确提取节点数据，将 16 个主卡片（184×224）高保真复刻为**可直接嵌入项目的自包含 HTML 组件**与**功能完整的交互原型**。

## 当前交付物（2026-05）

### 1. 交互式手表原型（最推荐）
- **文件**：`prototypes/watch-me-interactive-prototype.html`
- 280×280 智能手表精确模拟（带真实表壳阴影）
- **16 个屏幕全部可用**（通过右侧 App 导航或屏幕内链接切换）
  - Home（快捷入口）、Clock、Timer（真实倒计时 + 状态持久）、Tasks（可勾选 + 跳转 Timer）、Messages（双向聊天 + 气泡区分 + 发送）、Call（通话计时器）、Notifications、Activity（环形进度）、Wallet、Voice、Team、Progress、Card（NFC 模拟）、New Msg、Msg Detail、Confirm Tx、Add Contact
- 真实状态交互：Timer 暂停/重置/倒计时、任务切换持久化、消息发送、Call 计时、Toast 反馈、跨屏逻辑跳转
- 设计令牌一致：#1b1d21 背景、#7640ef 紫、#ff4a8c 粉 等

**如何使用交互原型**：
1. 用浏览器直接打开 `prototypes/watch-me-interactive-prototype.html`（或从 `index.html` 点击入口）
2. 点击右侧 4×4 App 网格图标切换屏幕
3. **关键交互测试**：
   - Timer：Start / Pause / Reset（离开再返回仍保持剩余时间）
   - Tasks：点击条目切换完成状态；底部有「Start Timer」快速入口
   - Messages：输入文字 → Send（支持 You / 对方气泡区分 + 时间戳）
   - Call：进入后点击麦克风按钮启动计时；红色按钮结束通话
   - New Msg / Confirm Tx / Add Contact 等卡片均有可点击动作（模拟 + 自动跳转）
4. 顶部「返回主屏」按钮可一键重置所有状态并回到 Home
5. 所有操作均为纯前端，无需构建

### 2. 模块化组件（推荐用于实际项目）
- **位置**：`components/cards/`
- **当前 13 个** 自包含单文件卡片（01-new-message.html 至 16-add-contact.html，部分编号对应 Figma 节点）
- 每个文件 = 完整可运行演示 + 复制按钮（移除外层 phone-mock 后即可直接嵌入任何 Tailwind 项目）
- 全部使用与原型一致的设计令牌与圆角/阴影

### 3. 完整卡片库总览
- `components/dark-theme-cards-library.html`
- 16 个卡片全景 + 颜色令牌展示 + 一键「复制 HTML」
- 适合设计师/开发者对齐视觉

### 4. 其他参考原型
- `prototypes/watch-me-dark-perfect.html` — 手机外框 + 多卡片场景高保真呈现（含导出 tokens 功能）
- `prototypes/watch-me-replica.html` — 早期卡片网格 + 变量提取参考

### 5. 项目入口与工具
- `index.html` — 统一启动画廊（推荐起点）
- `package.json` — 提供 `npm start` / `npm run serve` / `npm run preview`（使用 http-server 或 live-server 快速预览）

### 项目结构
```
.
├── index.html
├── README.md
├── CHANGELOG.md
├── package.json
├── docs/
│   ├── COMMIT_MESSAGE_GUIDELINES.md
│   ├── COMPONENT_USAGE_GUIDE.md          # ← 重点阅读
│   └── WATCH-ME-DARK-THEME-CARDS-STATUS.md
├── prototypes/
│   ├── watch-me-interactive-prototype.html
│   ├── watch-me-dark-perfect.html
│   └── watch-me-replica.html
├── components/
│   ├── dark-theme-cards-library.html
│   └── cards/ (13 个模块化 .html 组件)
└── .figma/ (gitignored)                   # MCP 截图与节点数据
```

## 快速开始

```bash
# 方式一（推荐）：直接双击打开
index.html

# 方式二：使用本地服务器（更好体验）
npm install          # 首次
npm start            # 自动打开 8080 端口的 index.html
```

所有文件均为零依赖单 HTML（CDN 引入 Tailwind + Font Awesome），可离线保存后使用。

## Light Theme 支持考虑（规划中，当前为 Dark Only）

当前所有实现均为 **Dark Theme 优先**（硬编码 #1b1d21 背景等），以匹配 Figma 主页面。

**已记录的 Light Theme 迁移考虑（供后续实现参考）：**

- **CSS 变量化**：将所有颜色提取到 `:root` 和 `[data-theme="light"]`：
  ```css
  :root {
    --bg: #1b1d21; --text: #fff; --gray: #808389; --accent: #7640ef; --accent2: #ff4a8c;
  }
  [data-theme="light"] {
    --bg: #f8f8fa; --text: #111; --gray: #6b7280; --accent: #5b21b6; /* 调整饱和度 */
  }
  ```
- 卡片/屏幕背景、文字、描边、图标全部改用 `var(--*)`
- 提供主题切换器（原型中可加按钮，真实项目用 localStorage + class/html data attr）
- 对比度检查：浅色模式下紫/粉强调色需适当加深或加描边保证可读性
- 特殊处理：Wallet 卡片白底在 light 下需反转或使用不同变体
- 渐变与阴影：在 light 下降低阴影强度，避免过重
- 组件库与原型需同步支持 `data-theme` 或独立 light-*.html 版本

建议下一步：先在设计令牌层完成变量定义，再逐步迁移单个卡片。

## 更多文档

- **组件使用指南**（强烈推荐）：`docs/COMPONENT_USAGE_GUIDE.md`
- 提交规范：`docs/COMMIT_MESSAGE_GUIDELINES.md`
- 卡片复刻状态追踪：`docs/WATCH-ME-DARK-THEME-CARDS-STATUS.md`

---

本项目遵循专业 Git 提交规范，所有变更均通过阶段性提交产生清晰历史。使用 MCP + HTML 复刻工作流持续迭代。
