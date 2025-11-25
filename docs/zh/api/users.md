# 用户管理

通过 API 管理用户。

## 用户对象

```json
{
  "id": "usr_123",
  "name": "张三",
  "email": "zhangsan@example.com",
  "role": "admin",
  "status": "active",
  "avatar": "https://example.com/avatars/usr_123.jpg",
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}
```

### 属性

| 属性 | 类型 | 描述 |
|-----|------|------|
| id | string | 用户的唯一标识符 |
| name | string | 用户的全名 |
| email | string | 用户的邮箱地址 |
| role | string | 用户角色：`admin`（管理员）、`user`（用户）、`viewer`（查看者） |
| status | string | 账户状态：`active`（活跃）、`inactive`（未激活）、`suspended`（已暂停） |
| avatar | string | 用户头像图片的 URL |
| created_at | string | 创建时间的 ISO 8601 时间戳 |
| updated_at | string | 最后更新时间的 ISO 8601 时间戳 |

## 列出所有用户

检索用户的分页列表。

```http
GET /v1/users
```

### 查询参数

| 参数 | 类型 | 默认值 | 描述 |
|-----|------|--------|------|
| page | integer | 1 | 页码 |
| limit | integer | 20 | 每页项目数（最大：100） |
| role | string | - | 按角色筛选 |
| status | string | - | 按状态筛选 |
| search | string | - | 按名称或邮箱搜索 |

### 请求示例

```bash
curl -X GET "https://api.example.com/v1/users?page=1&limit=20&role=admin" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### 响应示例

```json
{
  "success": true,
  "data": [
    {
      "id": "usr_123",
      "name": "张三",
      "email": "zhangsan@example.com",
      "role": "admin",
      "status": "active",
      "avatar": "https://example.com/avatars/usr_123.jpg",
      "created_at": "2025-01-01T00:00:00Z",
      "updated_at": "2025-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1,
    "pages": 1
  }
}
```

## 获取单个用户

检索特定用户的详细信息。

```http
GET /v1/users/{user_id}
```

### 请求示例

```bash
curl -X GET https://api.example.com/v1/users/usr_123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### 响应示例

```json
{
  "success": true,
  "data": {
    "id": "usr_123",
    "name": "张三",
    "email": "zhangsan@example.com",
    "role": "admin",
    "status": "active",
    "avatar": "https://example.com/avatars/usr_123.jpg",
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

## 创建用户

创建新用户。

```http
POST /v1/users
```

### 请求体

```json
{
  "name": "李四",
  "email": "lisi@example.com",
  "role": "user",
  "password": "secure_password_123"
}
```

### 请求示例

```bash
curl -X POST https://api.example.com/v1/users \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "李四",
    "email": "lisi@example.com",
    "role": "user",
    "password": "secure_password_123"
  }'
```

### 响应示例

```json
{
  "success": true,
  "data": {
    "id": "usr_456",
    "name": "李四",
    "email": "lisi@example.com",
    "role": "user",
    "status": "active",
    "created_at": "2025-01-20T15:00:00Z",
    "updated_at": "2025-01-20T15:00:00Z"
  },
  "message": "用户创建成功"
}
```

## 更新用户

更新现有用户的信息。

```http
PATCH /v1/users/{user_id}
```

### 请求体

```json
{
  "name": "张四",
  "role": "admin"
}
```

### 请求示例

```bash
curl -X PATCH https://api.example.com/v1/users/usr_123 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "张四",
    "role": "admin"
  }'
```

### 响应示例

```json
{
  "success": true,
  "data": {
    "id": "usr_123",
    "name": "张四",
    "email": "zhangsan@example.com",
    "role": "admin",
    "status": "active",
    "updated_at": "2025-01-20T16:00:00Z"
  },
  "message": "用户更新成功"
}
```

## 删除用户

永久删除用户。

```http
DELETE /v1/users/{user_id}
```

### 请求示例

```bash
curl -X DELETE https://api.example.com/v1/users/usr_123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### 响应示例

```json
{
  "success": true,
  "message": "用户删除成功"
}
```

## 错误响应

### 400 错误的请求

```json
{
  "success": false,
  "error": {
    "code": "invalid_request",
    "message": "无效的邮箱格式",
    "field": "email"
  }
}
```

### 404 未找到

```json
{
  "success": false,
  "error": {
    "code": "not_found",
    "message": "用户未找到"
  }
}
```

### 409 冲突

```json
{
  "success": false,
  "error": {
    "code": "duplicate_email",
    "message": "该邮箱的用户已存在"
  }
}
```

