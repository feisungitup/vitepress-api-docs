import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'API Documentation',
  description: 'Complete API Documentation with i18n support',
  
  // 如果部署到 GitHub Pages，需要设置 base
  base: '/vitepress-api-docs/',
  
  // 重写 URL，将根路径重定向到 /en/
  rewrites: {
    'en/:rest*': ':rest*'
  },
  
  // 国际化配置
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Overview', link: '/' },
              { text: 'Quick Start', link: '/api/quick-start' },
              { text: 'Authentication', link: '/api/authentication' }
            ]
          },
          {
            text: 'API Reference',
            items: [
              { text: 'Users', link: '/api/users' },
              { text: 'Products', link: '/api/products' }
            ]
          }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024-present'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        sidebar: [
          {
            text: '介绍',
            items: [
              { text: '概述', link: '/zh/' },
              { text: '快速开始', link: '/zh/api/quick-start' },
              { text: '身份认证', link: '/zh/api/authentication' }
            ]
          },
          {
            text: 'API 参考',
            items: [
              { text: '用户管理', link: '/zh/api/users' },
              { text: '产品管理', link: '/zh/api/products' }
            ]
          }
        ],
        footer: {
          message: '基于 MIT 许可发布',
          copyright: '版权所有 © 2024-至今'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    }
  },

  // 主题配置
  themeConfig: {
    search: {
      provider: 'local'
    }
  },

  // 最后更新时间
  lastUpdated: true,

  // Markdown 配置
  markdown: {
    lineNumbers: true
  }
})
