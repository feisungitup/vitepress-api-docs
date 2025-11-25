# 产品管理

通过 API 管理您的产品目录。

## 产品对象

```json
{
  "id": "prd_123",
  "name": "高级小部件",
  "description": "满足您需求的高质量小部件",
  "sku": "WGT-001",
  "price": 29.99,
  "currency": "USD",
  "stock": 100,
  "category": "widgets",
  "images": [
    "https://example.com/products/prd_123_1.jpg",
    "https://example.com/products/prd_123_2.jpg"
  ],
  "status": "active",
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-01-15T10:30:00Z"
}
```

### 属性

| 属性 | 类型 | 描述 |
|-----|------|------|
| id | string | 产品的唯一标识符 |
| name | string | 产品名称 |
| description | string | 产品描述 |
| sku | string | 库存单位 |
| price | number | 产品价格 |
| currency | string | 货币代码（ISO 4217） |
| stock | integer | 可用数量 |
| category | string | 产品类别 |
| images | array | 图片 URL 数组 |
| status | string | 产品状态：`active`（活跃）、`draft`（草稿）、`archived`（已归档） |
| created_at | string | 创建时间的 ISO 8601 时间戳 |
| updated_at | string | 最后更新时间的 ISO 8601 时间戳 |

## 列出所有产品

检索产品的分页列表。

```http
GET /v1/products
```

### 查询参数

| 参数 | 类型 | 默认值 | 描述 |
|-----|------|--------|------|
| page | integer | 1 | 页码 |
| limit | integer | 20 | 每页项目数（最大：100） |
| category | string | - | 按类别筛选 |
| status | string | active | 按状态筛选 |
| min_price | number | - | 最低价格筛选 |
| max_price | number | - | 最高价格筛选 |
| search | string | - | 按名称或 SKU 搜索 |

### 请求示例

```bash
curl -X GET "https://api.example.com/v1/products?category=widgets&status=active" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### 响应示例

```json
{
  "success": true,
  "data": [
    {
      "id": "prd_123",
      "name": "高级小部件",
      "description": "满足您需求的高质量小部件",
      "sku": "WGT-001",
      "price": 29.99,
      "currency": "USD",
      "stock": 100,
      "category": "widgets",
      "status": "active",
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

## 获取单个产品

检索特定产品的详细信息。

```http
GET /v1/products/{product_id}
```

### 请求示例

```bash
curl -X GET https://api.example.com/v1/products/prd_123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### 响应示例

```json
{
  "success": true,
  "data": {
    "id": "prd_123",
    "name": "高级小部件",
    "description": "满足您需求的高质量小部件",
    "sku": "WGT-001",
    "price": 29.99,
    "currency": "USD",
    "stock": 100,
    "category": "widgets",
    "images": [
      "https://example.com/products/prd_123_1.jpg"
    ],
    "status": "active",
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-15T10:30:00Z"
  }
}
```

## 创建产品

创建新产品。

```http
POST /v1/products
```

### 请求体

```json
{
  "name": "新小部件",
  "description": "一个令人惊叹的新小部件",
  "sku": "WGT-002",
  "price": 39.99,
  "currency": "USD",
  "stock": 50,
  "category": "widgets",
  "status": "active"
}
```

### 请求示例

```bash
curl -X POST https://api.example.com/v1/products \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "新小部件",
    "description": "一个令人惊叹的新小部件",
    "sku": "WGT-002",
    "price": 39.99,
    "currency": "USD",
    "stock": 50,
    "category": "widgets",
    "status": "active"
  }'
```

### 响应示例

```json
{
  "success": true,
  "data": {
    "id": "prd_456",
    "name": "新小部件",
    "description": "一个令人惊叹的新小部件",
    "sku": "WGT-002",
    "price": 39.99,
    "currency": "USD",
    "stock": 50,
    "category": "widgets",
    "status": "active",
    "created_at": "2025-01-20T15:00:00Z",
    "updated_at": "2025-01-20T15:00:00Z"
  },
  "message": "产品创建成功"
}
```

## 更新产品

更新现有产品。

```http
PATCH /v1/products/{product_id}
```

### 请求体

```json
{
  "price": 34.99,
  "stock": 75
}
```

### 请求示例

```bash
curl -X PATCH https://api.example.com/v1/products/prd_123 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "price": 34.99,
    "stock": 75
  }'
```

### 响应示例

```json
{
  "success": true,
  "data": {
    "id": "prd_123",
    "name": "高级小部件",
    "price": 34.99,
    "stock": 75,
    "updated_at": "2025-01-20T16:00:00Z"
  },
  "message": "产品更新成功"
}
```

## 删除产品

永久删除产品。

```http
DELETE /v1/products/{product_id}
```

### 请求示例

```bash
curl -X DELETE https://api.example.com/v1/products/prd_123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### 响应示例

```json
{
  "success": true,
  "message": "产品删除成功"
}
```

## 批量操作

### 批量更新库存

一次更新多个产品的库存水平。

```http
POST /v1/products/bulk/stock
```

### 请求体

```json
{
  "updates": [
    {
      "product_id": "prd_123",
      "stock": 150
    },
    {
      "product_id": "prd_456",
      "stock": 200
    }
  ]
}
```

### 响应示例

```json
{
  "success": true,
  "data": {
    "updated": 2,
    "failed": 0
  },
  "message": "库存更新成功"
}
```

## 错误响应

### 400 错误的请求

```json
{
  "success": false,
  "error": {
    "code": "invalid_request",
    "message": "价格必须是正数",
    "field": "price"
  }
}
```

### 404 未找到

```json
{
  "success": false,
  "error": {
    "code": "not_found",
    "message": "产品未找到"
  }
}
```

### 409 冲突

```json
{
  "success": false,
  "error": {
    "code": "duplicate_sku",
    "message": "该 SKU 的产品已存在"
  }
}
```

