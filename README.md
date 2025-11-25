# VitePress API 文档

一个支持国际化的 API 文档项目，使用 VitePress 构建，自动部署到 GitHub Pages。

## ✨ 特性

- 📝 **完整的 API 文档** - 包含认证、用户管理、产品管理等完整示例
- 🌍 **国际化支持** - 内置中英文双语支持
- 🚀 **自动部署** - 通过 GitHub Actions 自动部署到 GitHub Pages
- 🎨 **美观的界面** - 基于 VitePress 默认主题，现代化设计
- 🔍 **本地搜索** - 内置搜索功能，快速查找内容
- 📱 **响应式设计** - 完美适配各种设备

## 📦 技术栈

- [VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 的静态站点生成器
- [GitHub Actions](https://github.com/features/actions) - 自动化 CI/CD
- [GitHub Pages](https://pages.github.com/) - 免费的静态网站托管

## 🚀 快速开始

### 前置要求

- Node.js 18 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 本地开发

启动开发服务器：

```bash
npm run docs:dev
```

访问 http://localhost:5173 查看文档。

### 构建

构建生产版本：

```bash
npm run docs:build
```

### 预览构建结果

预览构建后的站点：

```bash
npm run docs:preview
```

## 📁 项目结构

```
vitepress-api-docs/
├── docs/                      # 文档目录
│   ├── en/                    # 英文文档
│   │   ├── index.md          # 英文首页
│   │   └── api/              # API 文档
│   │       ├── index.md      # API 介绍
│   │       ├── quick-start.md
│   │       ├── authentication.md
│   │       ├── users.md
│   │       └── products.md
│   ├── zh/                    # 中文文档
│   │   ├── index.md          # 中文首页
│   │   └── api/              # API 文档
│   │       ├── index.md
│   │       ├── quick-start.md
│   │       ├── authentication.md
│   │       ├── users.md
│   │       └── products.md
│   ├── .vitepress/            # VitePress 配置
│   │   ├── config.ts         # 站点配置
│   │   └── theme/            # 主题定制
│   └── public/                # 静态资源
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 部署配置
├── package.json
└── README.md
```

## 🌍 国际化

项目支持中英文双语：

- **英文**（默认）：访问根路径 `/`
- **中文**：访问 `/zh/` 路径

语言切换器会自动显示在导航栏右上角。

### 添加新语言

1. 在 `docs/` 目录下创建新的语言目录（如 `docs/fr/`）
2. 在 `docs/.vitepress/config.ts` 中添加语言配置：

```typescript
locales: {
  // ... 现有配置
  fr: {
    label: 'Français',
    lang: 'fr',
    link: '/fr/',
    themeConfig: {
      // 法语导航和侧边栏配置
    }
  }
}
```

## 📝 编写文档

### Markdown 扩展

VitePress 支持丰富的 Markdown 扩展：

- **自定义容器**：提示框、警告框等
- **代码块高亮**：支持多种编程语言
- **代码组**：标签式代码块
- **表格**：支持 GitHub Flavored Markdown 表格
- **Emoji**：`:tada:` → 🎉

### Frontmatter

每个页面可以使用 frontmatter 定义元数据：

```yaml
---
title: 页面标题
description: 页面描述
layout: doc
---
```

## 🚀 部署到 GitHub Pages

### 步骤 1：创建 GitHub 仓库

1. 在 GitHub 上创建新仓库
2. 将代码推送到仓库

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/vitepress-api-docs.git
git push -u origin main
```

### 步骤 2：配置 base 路径

如果你的仓库名不是 `<username>.github.io`，需要在 `docs/.vitepress/config.ts` 中设置 `base`：

```typescript
export default defineConfig({
  base: '/vitepress-api-docs/', // 替换为你的仓库名
  // ...
})
```

### 步骤 3：启用 GitHub Pages

1. 进入仓库的 Settings > Pages
2. 在 "Build and deployment" 下：
   - Source: 选择 **GitHub Actions**
3. 推送代码后，GitHub Actions 会自动构建和部署

### 步骤 4：访问站点

部署完成后，访问：

```
https://yourusername.github.io/vitepress-api-docs/
```

## 🔧 配置

### 站点配置

主要配置文件：`docs/.vitepress/config.ts`

- `title`：站点标题
- `description`：站点描述
- `base`：基础路径
- `locales`：国际化配置
- `themeConfig`：主题配置

### 主题配置

可以自定义：

- 导航栏（nav）
- 侧边栏（sidebar）
- 社交链接（socialLinks）
- 页脚（footer）
- 搜索（search）

## 📚 文档资源

- [VitePress 官方文档](https://vitepress.dev/)
- [VitePress 国际化指南](https://vitepress.dev/guide/i18n)
- [Markdown 扩展](https://vitepress.dev/guide/markdown)
- [GitHub Pages 文档](https://docs.github.com/en/pages)

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

## 📄 许可证

[MIT License](LICENSE)

## 💡 提示

### 自定义域名

如果要使用自定义域名：

1. 在 `docs/public/` 目录下创建 `CNAME` 文件
2. 在文件中写入你的域名（如 `docs.example.com`）
3. 在域名提供商处配置 DNS 记录

### 环境变量

如果需要在文档中使用环境变量，可以在构建时注入。

### SEO 优化

- 为每个页面添加 frontmatter 元数据
- 使用 `description` 和 `head` 配置
- 启用 `lastUpdated` 选项

## 🐛 常见问题

### 1. 构建失败

检查：
- Node.js 版本是否 >= 18
- 依赖是否正确安装
- 配置文件语法是否正确

### 2. 页面 404

检查：
- `base` 路径配置是否正确
- 文件路径是否正确
- GitHub Pages 是否已启用

### 3. 样式丢失

确保：
- `base` 路径配置正确
- 资源文件放在 `docs/public/` 目录

## 📧 联系方式

如有问题，请提交 [Issue](https://github.com/yourusername/vitepress-api-docs/issues)。

---

⭐ 如果这个项目对你有帮助，请给一个 Star！

