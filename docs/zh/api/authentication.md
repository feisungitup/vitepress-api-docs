# 身份验证

了解如何验证您的 API 请求。

## API 密钥

API 密钥是主要的身份验证方法。每个 API 密钥都与您的账户关联，可以从仪表板进行管理。

### 获取 API 密钥

1. 登录到您的账户
2. 导航到 设置 > API 密钥
3. 点击"创建新 API 密钥"
4. 为您的密钥提供一个描述性名称
5. 复制并安全存储您的 API 密钥

::: danger 危险
API 密钥提供对您账户的完全访问权限。请保证其安全，永远不要在客户端代码或公共代码库中暴露它们。
:::

### 使用 API 密钥

在每个请求的 `Authorization` 头中包含您的 API 密钥：

```http
Authorization: Bearer YOUR_API_KEY
```

### 请求示例

```bash
curl -X GET https://api.example.com/v1/users/usr_123 \
  -H "Authorization: Bearer sk_live_abc123xyz789"
```

## 密钥类型

我们支持两种类型的 API 密钥：

### 测试密钥

- 前缀：`sk_test_`
- 用于开发和测试
- 不会产生费用
- 数据不会被持久化

### 生产密钥

- 前缀：`sk_live_`
- 用于生产环境
- 真实的交易和数据
- 通过额外的监控进行保护

## 最佳实践

### 1. 保密密钥

永远不要在以下位置暴露 API 密钥：
- 客户端代码（JavaScript、移动应用）
- 公共代码库（GitHub、GitLab）
- 公共论坛或支持工单

### 2. 使用环境变量

将 API 密钥存储在环境变量中：

```bash
# .env 文件
API_KEY=sk_live_abc123xyz789
```

```javascript
// JavaScript
const apiKey = process.env.API_KEY;
```

```python
# Python
import os
api_key = os.environ.get('API_KEY')
```

### 3. 定期轮换密钥

- 每 90 天轮换一次 API 密钥
- 如果密钥被泄露，立即轮换
- 为不同服务使用多个密钥

### 4. 使用密钥限制

通过以下方式限制 API 密钥：
- IP 地址
- 引用 URL
- 特定的 API 端点

## 密钥管理

### 列出 API 密钥

```bash
GET /v1/api-keys
```

响应：

```json
{
  "success": true,
  "data": [
    {
      "id": "key_123",
      "name": "生产密钥",
      "prefix": "sk_live_",
      "created_at": "2025-01-01T00:00:00Z",
      "last_used": "2025-01-15T10:30:00Z"
    }
  ]
}
```

### 撤销 API 密钥

```bash
DELETE /v1/api-keys/key_123
```

响应：

```json
{
  "success": true,
  "message": "API 密钥已成功撤销"
}
```

## OAuth 2.0（即将推出）

我们正在开发 OAuth 2.0 支持，用于第三方集成。这将允许：

- 用户授权访问
- 细粒度权限范围
- 刷新令牌
- 改进客户端应用程序的安全性

敬请期待更新！

## 故障排除

### 401 未授权

**问题**：缺少或无效的 API 密钥

**解决方案**：验证您的 API 密钥是否正确并包含在 Authorization 头中

### 403 禁止访问

**问题**：API 密钥没有此资源的权限

**解决方案**：在仪表板中检查您的 API 密钥权限

### 密钥不工作

1. 验证密钥是否未被撤销
2. 检查密钥中的拼写错误
3. 确保您使用的是正确的环境（测试 vs 生产）
4. 如果问题持续存在，请联系支持

