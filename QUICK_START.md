# 快速开始 / Quick Start

## 🚀 5 分钟快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run docs:dev
```

访问 http://localhost:5173

### 3. 构建生产版本

```bash
npm run docs:build
```

### 4. 预览构建结果

```bash
npm run docs:preview
```

## 📝 常用命令

| 命令 | 说明 |
|------|------|
| `npm run docs:dev` | 启动开发服务器 |
| `npm run docs:build` | 构建生产版本 |
| `npm run docs:preview` | 预览构建结果 |

## 📁 目录结构

```
vitepress-api-docs/
├── docs/
│   ├── en/                   # 英文文档
│   │   ├── index.md         # 英文首页
│   │   └── api/             # API 文档
│   ├── zh/                   # 中文文档
│   │   ├── index.md         # 中文首页
│   │   └── api/             # API 文档
│   ├── .vitepress/
│   │   └── config.ts        # 配置文件
│   └── public/              # 静态资源
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions 配置
├── package.json
└── README.md
```

## 🌍 访问不同语言

- 英文（默认）：http://localhost:5173/
- 中文：http://localhost:5173/zh/

## ✏️ 编辑文档

1. 英文文档：编辑 `docs/en/` 目录下的 `.md` 文件
2. 中文文档：编辑 `docs/zh/` 目录下的 `.md` 文件
3. 保存后开发服务器会自动热重载

## 🎨 自定义配置

编辑 `docs/.vitepress/config.ts` 可以修改：

- 站点标题和描述
- 导航栏和侧边栏
- 主题颜色
- 社交链接

## 🚀 部署到 GitHub Pages

详细步骤请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

简短版本：

```bash
# 1. 创建 GitHub 仓库
# 2. 配置 base 路径（如果需要）
# 3. 推送代码
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/vitepress-api-docs.git
git push -u origin main

# 4. 在 GitHub 仓库设置中启用 GitHub Pages（选择 GitHub Actions）
# 5. 等待自动部署完成
```

## 📚 更多资源

- [README.md](./README.md) - 完整的项目说明
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 详细的部署指南
- [VitePress 文档](https://vitepress.dev/) - 官方文档

## 💡 提示

- 修改文件后记得保存
- 开发服务器支持热重载
- 构建前请确保没有错误
- 部署前先在本地测试构建

---

Happy documenting! 📝✨

