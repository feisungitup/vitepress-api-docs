# Introduction

Welcome to the API documentation. This guide will help you integrate our API into your application.

## Overview

Our API is organized around REST. It has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

## Base URL

All API requests should be made to:

```
https://api.example.com/v1
```

## Authentication

All API requests require authentication using an API key. Include your API key in the request header:

```http
Authorization: Bearer YOUR_API_KEY
```

## Request Format

All POST requests should include a `Content-Type` header:

```http
Content-Type: application/json
```

## Response Format

All responses are returned in JSON format:

```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "message": "Operation completed successfully"
}
```

## Error Handling

When an error occurs, the API returns an appropriate HTTP status code and error details:

```json
{
  "success": false,
  "error": {
    "code": "invalid_request",
    "message": "Invalid request parameters"
  }
}
```

### Common HTTP Status Codes

| Status Code | Description |
|------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

## Rate Limiting

API requests are limited to 1000 requests per hour per API key. Rate limit information is included in response headers:

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1609459200
```

## Pagination

List endpoints support pagination using the following parameters:

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20, max: 100)

```http
GET /api/v1/users?page=2&limit=50
```

Response includes pagination metadata:

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

## Next Steps

- [Quick Start Guide](/en/api/quick-start)
- [Authentication Details](/en/api/authentication)
- [User Management](/en/api/users)
- [Product Management](/en/api/products)

