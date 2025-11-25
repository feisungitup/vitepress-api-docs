---
layout: page
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  if (typeof window !== 'undefined') {
    router.go('/zh/api/')
  }
})
</script>

# 跳转中...

您即将被重定向到 API 文档。

如果没有自动跳转，请[点击这里](/zh/api/)。
