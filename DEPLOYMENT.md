# 部署指南 / Deployment Guide

本文档提供将 VitePress API 文档部署到 GitHub Pages 的详细步骤。

## 📋 前提条件

- ✅ 已安装 Git
- ✅ 拥有 GitHub 账户
- ✅ 已在本地测试通过项目

## 🚀 部署步骤

### 1. 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `vitepress-api-docs`（或您喜欢的名称）
   - **Description**: "API Documentation with VitePress"
   - **Public** 或 **Private**（GitHub Pages 在两种情况下都可用）
   - 不要勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

### 2. 配置 Base 路径

在 `docs/.vitepress/config.ts` 中配置正确的 base 路径：

**情况 A：** 如果您的 GitHub 用户名是 `yourusername`，仓库名是 `yourusername.github.io`

```typescript
export default defineConfig({
  base: '/', // 使用根路径
  // ...
})
```

访问地址：`https://yourusername.github.io/`

**情况 B：** 如果仓库名不是 `yourusername.github.io`（例如 `vitepress-api-docs`）

```typescript
export default defineConfig({
  base: '/vitepress-api-docs/', // 使用仓库名作为 base
  // ...
})
```

访问地址：`https://yourusername.github.io/vitepress-api-docs/`

### 3. 推送代码到 GitHub

在项目根目录执行以下命令：

```bash
# 初始化 Git 仓库（如果还没有初始化）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: VitePress API documentation"

# 设置主分支名称为 main
git branch -M main

# 添加远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/yourusername/vitepress-api-docs.git

# 推送到 GitHub
git push -u origin main
```

### 4. 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"（设置）
2. 在左侧菜单中找到 "Pages"
3. 在 "Build and deployment" 部分：
   - **Source**: 选择 "GitHub Actions"
4. 保存设置

### 5. 触发部署

推送代码后，GitHub Actions 会自动开始构建和部署：

1. 访问仓库的 "Actions" 标签页
2. 您应该能看到 "Deploy VitePress site to Pages" 工作流正在运行
3. 等待构建完成（通常需要 1-3 分钟）
4. 构建成功后，会显示绿色的 ✅ 标记

### 6. 访问您的网站

部署完成后，访问：

- **情况 A**：`https://yourusername.github.io/`
- **情况 B**：`https://yourusername.github.io/vitepress-api-docs/`

## 🔄 更新文档

每次推送到 `main` 分支时，GitHub Actions 会自动重新构建和部署：

```bash
# 修改文档后
git add .
git commit -m "Update documentation"
git push
```

## 🎨 自定义域名（可选）

如果您想使用自定义域名（如 `docs.example.com`）：

### 1. 添加 CNAME 文件

在 `docs/public/` 目录创建 `CNAME` 文件：

```bash
echo "docs.example.com" > docs/public/CNAME
```

### 2. 更新配置

在 `docs/.vitepress/config.ts` 中：

```typescript
export default defineConfig({
  base: '/', // 使用根路径
  // ...
})
```

### 3. 配置 DNS

在您的域名提供商处添加 DNS 记录：

**选项 A：使用 A 记录（推荐）**

添加以下 A 记录：

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**选项 B：使用 CNAME 记录**

```
CNAME  docs  yourusername.github.io.
```

### 4. 在 GitHub 启用自定义域名

1. 进入仓库设置 > Pages
2. 在 "Custom domain" 输入您的域名
3. 勾选 "Enforce HTTPS"
4. 保存

等待 DNS 传播（可能需要几分钟到几小时）。

## 🐛 常见问题

### 问题 1: 404 错误

**症状**：访问网站时出现 404 错误

**解决方案**：
- 检查 `base` 配置是否正确
- 确认 GitHub Pages 已启用且选择了 "GitHub Actions"
- 检查部署是否成功完成

### 问题 2: 样式丢失

**症状**：页面显示但没有样式

**解决方案**：
- 检查 `base` 配置是否与仓库名匹配
- 确保静态资源在 `docs/public/` 目录下
- 清除浏览器缓存

### 问题 3: 构建失败

**症状**：GitHub Actions 显示红色 ❌

**解决方案**：
1. 点击失败的工作流查看日志
2. 检查是否有死链接
3. 验证配置文件语法
4. 确保所有引用的文件都存在

### 问题 4: 语言切换不工作

**症状**：无法在中英文之间切换

**解决方案**：
- 确认 `locales` 配置正确
- 检查文件结构是否符合 `docs/en/` 和 `docs/zh/` 格式
- 验证所有链接包含正确的语言前缀

## 📊 监控部署

### 查看部署状态

1. 访问 `https://github.com/yourusername/vitepress-api-docs/actions`
2. 查看最近的工作流运行

### 查看部署历史

1. 进入仓库设置 > Pages
2. 滚动到底部查看部署历史

## 🔧 高级配置

### 启用部署预览

为了在合并前预览 Pull Request：

1. 创建 `.github/workflows/preview.yml`
2. 配置 PR 触发器
3. 使用 Netlify 或 Vercel 进行预览部署

### 添加构建缓存

优化构建速度，在 `deploy.yml` 中添加缓存：

```yaml
- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### 设置环境变量

如果需要在构建时使用环境变量：

1. 进入仓库设置 > Secrets and variables > Actions
2. 添加必要的秘密变量
3. 在工作流中引用：`${{ secrets.YOUR_SECRET }}`

## 📝 检查清单

部署前请确认：

- [ ] `base` 路径配置正确
- [ ] 所有链接使用正确的路径前缀（`/en/` 或 `/zh/`）
- [ ] 本地构建成功（`npm run docs:build`）
- [ ] Git 仓库已推送到 GitHub
- [ ] GitHub Pages 设置为 "GitHub Actions"
- [ ] 工作流文件 `.github/workflows/deploy.yml` 存在
- [ ] 如使用自定义域名，CNAME 文件已创建
- [ ] 文档内容已审核，没有敏感信息

## 🎯 下一步

- 📝 添加更多 API 端点文档
- 🎨 自定义主题和样式
- 🔍 配置 SEO 元数据
- 📊 添加分析工具（如 Google Analytics）
- 💬 集成评论系统
- 🌐 添加更多语言支持

## 📞 获取帮助

- [VitePress 官方文档](https://vitepress.dev/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)

如有问题，请在仓库中创建 Issue。

---

祝您部署顺利！🚀

