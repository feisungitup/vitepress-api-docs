# Quick Start

Get up and running with our API in minutes.

## Step 1: Get Your API Key

1. Sign up for an account at [https://example.com/signup](https://example.com/signup)
2. Navigate to the API section in your dashboard
3. Generate a new API key
4. Store your API key securely

::: warning
Never share your API key or commit it to version control. Keep it secure like a password.
:::

## Step 2: Make Your First Request

Here's a simple example using cURL:

```bash
curl -X GET https://api.example.com/v1/users \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

### JavaScript Example

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
.catch(error => console.error('Error:', error));
```

### Python Example

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

## Step 3: Handle the Response

A successful response will look like this:

```json
{
  "success": true,
  "data": [
    {
      "id": "usr_123",
      "name": "John Doe",
      "email": "john@example.com",
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

## Step 4: Explore More Endpoints

Now that you've made your first request, explore other endpoints:

- [User Management](/en/api/users) - Create, read, update, and delete users
- [Product Management](/en/api/products) - Manage your product catalog
- [Authentication](/en/api/authentication) - Learn about advanced authentication options

## Need Help?

- Check out our [API Reference](/en/api/) for detailed documentation
- Join our [Developer Community](https://community.example.com)
- Contact [support@example.com](mailto:support@example.com) for assistance

