---
category: 前端开发
description: 本文档总结了 Vue 3 项目开发中的常用实践与代码模板，包括项目结构建议、组件开发、路由与状态管理、请求封装等，适合中小型前端项目使用。
draft: false
lang: zh-CN
pinned: false
published: 2024-07-20
tags:
- Vue
- 前端
- 文档
title: Vue3项目开发实用文档
---

# 📝 Vue 3 项目开发实用文档

本文档总结了 Vue 3 项目开发中的常用实践与代码模板，包括项目结构建议、组件开发、路由与状态管理、请求封装等，适合中小型前端项目使用。

---

## 📂 1. 推荐项目结构

建议使用 Vite 搭建项目，并采用如下目录结构：

```bash
src/
├── assets/            # 🖼 静态资源（图片、样式等）
├── components/        # 🔧 通用组件
├── views/             # 🖥 页面组件
├── layouts/           # 📐 页面布局组件
├── router/            # 🛣 Vue Router 配置
├── store/             # 🏪 状态管理（Pinia）
├── api/               # 📡 接口请求封装
├── utils/             # ⚙️ 工具函数
├── composables/       # 🔄 可复用逻辑（组合式函数）
├── App.vue            # 🌟 根组件
├── main.ts            # 🚀 入口文件
```

---

## ⚡ 2. 初始化项目

```bash
npm create vite@latest my-app --template vue-ts
cd my-app
npm install
```

推荐使用 TypeScript 模板，并安装以下依赖：

```bash
npm install vue-router@4 pinia axios
```

---

## 🧩 3. 组件开发示例（组合式 API）

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">点击了 {{ count }} 次</button>
</template>
```

---

## 🌐 4. 路由配置（router/index.ts）

```ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('@/views/About.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

在 `main.ts` 中注册：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

---

## 🏪 5. 状态管理（store/index.ts）

使用 Pinia 管理状态：

```ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```

使用方式：

```ts
import { useCounterStore } from '@/store'
const counter = useCounterStore()
counter.increment()
```

在 `main.ts` 中注册 Pinia：

```ts
import { createPinia } from 'pinia'
createApp(App).use(createPinia())
```

---

## 📡 6. 请求封装（api/request.ts）

```ts
import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

request.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default request
```

封装接口：

```ts
export function getUserInfo() {
  return request.get('/user/info')
}
```

---

## ⚙️ 7. 环境变量与路径别名

Vite 中配置路径别名 `vite.config.ts`：

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

使用环境变量 `.env` 文件：

```env
VITE_API_BASE_URL=https://api.example.com
```

使用方式：

```ts
const baseURL = import.meta.env.VITE_API_BASE_URL
```

---

## 🎨 8. 样式建议

- 全局样式写在 `src/assets/styles/` 目录中。
- 推荐使用预处理器 **SCSS**：`npm install -D sass`
- 变量抽离到 `variables.scss`，在 `main.ts` 全局导入或按需使用

---

## 💡 9. 实用建议

- 使用组合式 API（`script setup`）开发组件
- 页面间复用逻辑可拆分为 `composables/` 目录
- 所有接口统一封装，便于管理和错误处理
- 推荐使用 **ESLint + Prettier** 保持代码规范

---

## 🔗 附录资源

- 🟦 [Vue 官方文档](https://cn.vuejs.org/)
- 🟩 [Vue Router 文档](https://router.vuejs.org/)
- 🟪 [Pinia 状态管理](https://pinia.vuejs.org/)
- 🟥 [Axios 文档](https://axios-http.com/)
- 🟨 [Vite 文档](https://vitejs.dev/)
