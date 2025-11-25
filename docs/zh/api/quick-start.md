# 快速开始

几分钟内快速上手我们的 API。

## 步骤 1：获取 API 密钥

1. 在 [https://example.com/signup](https://example.com/signup) 注册账户
2. 在仪表板中导航到 API 部分
3. 生成新的 API 密钥
4. 安全地存储您的 API 密钥

::: warning 警告
永远不要分享您的 API 密钥或将其提交到版本控制系统。像对待密码一样保护它。
:::

## 步骤 2：发送第一个请求

这是一个使用 cURL 的简单示例：

```bash
curl -X GET https://api.example.com/v1/users \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

### JavaScript 示例

```javascript
const apiKey = 'YOUR_API_KEY';

fetch('https://api.example.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('错误:', error));
```

### Python 示例

```python
import requests

api_key = 'YOUR_API_KEY'
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.example.com/v1/users', headers=headers)
data = response.json()
print(data)
```

## 步骤 3：处理响应

成功的响应如下所示：

```json
{
  "success": true,
  "data": [
    {
      "id": "usr_123",
      "name": "张三",
      "email": "zhangsan@example.com",
      "created_at": "2025-01-01T00:00:00Z"
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

## 步骤 4：探索更多端点

现在您已经完成了第一个请求，探索其他端点：

- [用户管理](/zh/api/users) - 创建、读取、更新和删除用户
- [产品管理](/zh/api/products) - 管理您的产品目录
- [身份验证](/zh/api/authentication) - 了解高级身份验证选项

## 需要帮助？

- 查看我们的 [API 参考](/zh/api/) 获取详细文档
- 加入我们的 [开发者社区](https://community.example.com)
- 联系 [support@example.com](mailto:support@example.com) 获取帮助

