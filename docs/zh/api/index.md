# 介绍

欢迎使用 API 文档。本指南将帮助您将我们的 API 集成到您的应用程序中。

## 概述

我们的 API 围绕 REST 架构设计。它具有可预测的面向资源的 URL，接受表单编码的请求体，返回 JSON 编码的响应，并使用标准的 HTTP 响应码、身份验证和请求方法。

## 基础 URL

所有 API 请求都应发送到：

```
https://api.example.com/v1
```

## 身份验证

所有 API 请求都需要使用 API 密钥进行身份验证。在请求头中包含您的 API 密钥：

```http
Authorization: Bearer YOUR_API_KEY
```

## 请求格式

所有 POST 请求都应包含 `Content-Type` 头：

```http
Content-Type: application/json
```

## 响应格式

所有响应都以 JSON 格式返回：

```json
{
  "success": true,
  "data": {
    // 响应数据
  },
  "message": "操作成功完成"
}
```

## 错误处理

当发生错误时，API 会返回适当的 HTTP 状态码和错误详情：

```json
{
  "success": false,
  "error": {
    "code": "invalid_request",
    "message": "无效的请求参数"
  }
}
```

### 常见 HTTP 状态码

| 状态码 | 描述 |
|-------|------|
| 200 | 成功 |
| 201 | 已创建 |
| 400 | 错误的请求 |
| 401 | 未授权 |
| 403 | 禁止访问 |
| 404 | 未找到 |
| 500 | 服务器内部错误 |

## 速率限制

API 请求限制为每个 API 密钥每小时 1000 次请求。速率限制信息包含在响应头中：

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1609459200
```

## 分页

列表端点支持使用以下参数进行分页：

- `page` - 页码（默认：1）
- `limit` - 每页项目数（默认：20，最大：100）

```http
GET /api/v1/users?page=2&limit=50
```

响应包含分页元数据：

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 50,
    "total": 1000,
    "pages": 20
  }
}
```

## 下一步

- [快速开始指南](/zh/api/quick-start)
- [身份验证详情](/zh/api/authentication)
- [用户管理](/zh/api/users)
- [产品管理](/zh/api/products)

