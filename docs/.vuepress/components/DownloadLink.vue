<template>
  <a :href="`https://uimini.github.io/docs/download/uimini-${version}.zip`">
    <div class="ui-button isPrimary">Download Compiled CSS</div>
  </a>
</template>

<script>
import { version } from '../../../package.json'

export default {
  data() {
    return {
      version: version
    }
  }
}
</script>
