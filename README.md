# Watch Me UI Kit — Figma 复刻 + 可交互原型

> **目标**：将 Figma「Watch Me - UI kit」Dark Theme 页面的 16+ 个卡片高保真复刻为可直接用于项目的动态交互组件与原型。

## 当前交付物（2026-05）

### 1. 交互式手表原型（推荐体验）
- **位置**：`prototypes/watch-me-interactive-prototype.html`
- 完整模拟 280×280 智能手表
- 支持 16 个屏幕自由切换
- 多个屏幕已实现真实交互（Timer、Tasks、Messages、Call 等）
- 底部导航 + 逻辑跳转

### 2. 可复用组件库
- **位置**：`components/cards/`
- 7 个独立卡片片段（01-new-message, 02-voice-message, 03-timer, 04-wallet, 08-call, 09-tasks, 10-message）
- 每个均为自包含 HTML（Tailwind CDN + 复制按钮），可直接嵌入项目

### 3. 完整卡片组件库展示
- `components/dark-theme-cards-library.html`（16 个卡片全集 + 设计令牌 + 一键复制）

### 4. 其他高保真原型
- `prototypes/watch-me-dark-perfect.html` — 手机外框多场景完美复刻
- `prototypes/watch-me-replica.html` — 卡片网格 + 颜色系统参考

### 5. 项目入口
- `index.html` — 统一导航与概览（推荐从这里开始）

### 项目结构（专业化重组后）
```
.
├── index.html                     # 项目入口画廊
├── README.md
├── package.json                   # 脚本与元数据（可选本地服务器）
├── docs/
│   ├── COMMIT_MESSAGE_GUIDELINES.md
│   └── WATCH-ME-DARK-THEME-CARDS-STATUS.md
├── prototypes/
│   ├── watch-me-interactive-prototype.html   # 完整交互手表模拟器（16屏）
│   ├── watch-me-dark-perfect.html
│   └── watch-me-replica.html
├── components/
│   ├── dark-theme-cards-library.html         # 全 16 卡片库
│   └── cards/                                # 模块化单卡片源码
│       ├── 01-new-message.html
│       └── ...
└── .figma/ (ignored)              # MCP 临时截图/导出
```

## 快速开始

```bash
# 推荐：用浏览器打开项目入口
# (或使用下方 npm 脚本)

# 直接预览
start prototypes/watch-me-interactive-prototype.html
start components/dark-theme-cards-library.html
```

使用 `npm start` 可一键启动本地服务器（见 package.json）。

## 后续计划（Multi-Agent 正在推进）

- [ ] 补全所有 16 个屏幕的深度交互
- [ ] Light Theme 支持
- [ ] 更完整的组件导出（React / 纯 HTML 版本）
- [ ] 更好的状态管理与屏幕间联动
- [ ] 文档与使用指南完善

---

**本项目严格遵循** `docs/COMMIT_MESSAGE_GUIDELINES.md` 的提交规范。
