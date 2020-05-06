<!--
 * @Author: ZooMze
 * @Date: 2020-03-13 11:15:31
 * @LastEditTime: 2020-04-29 18:49:00
 * @LastEditors: Please set LastEditors
 * @Description: 用以输出外部跳转链接
 * @FilePath: \vue-codechos-template\src\layout\components\Sidebar\Link.vue
 -->

<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>
