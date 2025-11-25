---
layout: page
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  if (typeof window !== 'undefined') {
    router.go('/api/')
  }
})
</script>

# Redirecting...

You will be redirected to the API documentation in a moment.

If you are not redirected automatically, [click here](/api/).
