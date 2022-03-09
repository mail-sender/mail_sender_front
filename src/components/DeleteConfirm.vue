<template>
  <div class="modal-content">
    <div class="title">삭제</div>
    <div class="message">
      정말 삭제하시겠습니까?
    </div>
    <div class="box-flex buttons">
      <n-button ghost type="primary"
        block @click="clickCancelBtn">CANCEL</n-button>
      <n-button type="primary"
        block @click="clickDiscardBtn">DISCARD</n-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup (_, context) {
    return {
      clickCancelBtn () {
        context.emit('cancel');
      },
      clickDiscardBtn () {
        context.emit('discard');
      }
    }
  }
})
</script>

<style scoped lang="scss">
.modal-content {
  text-align: center;
}
.message { 
  margin-bottom: 20px;
  font-size: 1rem;
}
.buttons {
  > *:first-child {
    margin-right: 15px;
  }
}
</style>
