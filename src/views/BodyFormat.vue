<template>
  <main>
    <n-card class="main-card">
      <div class="container">
        <div class="box-name">{{ bodyFormat.name }}</div>
        <div class="box-input-format">
          <n-input
            v-model:value="bodyFormat.content"
            type="textarea"
            placeholder="Body Format"
            class="input-format"
          />
        </div>
        <div class="footer">
          <n-button ghost color="#007EFF" class="btn" @click="clickDiscardBtn">
            DISCARD
          </n-button>
          <n-button color="#007EFF" class="btn" @click="clickEditBtn">
            EDIT
          </n-button>
        </div>
      </div>
    </n-card>
  </main>
</template>

<script lang="ts">
import { useDataStore } from "@/stores/data";

export default {
  setup() {
    return { data: useDataStore() };
  },
  data() {
    return {
      bodyFormat: { content: "" },
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  watch: {
    "$route.params.id"() {
      this.initBodyFormat();
    },
  },
  created() {
    this.initBodyFormat();
  },
  methods: {
    initBodyFormat() {
      this.bodyFormat =
        this.data.bodyFormats.find((format) => {
          return format._id === this.id;
        }) || {};
    },
    clickEditBtn() {
      // TODO: 수정 작업
    },
    clickDiscardBtn() {
      // TODO: 정말 삭제하시겠습니까? Confirm
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 35px 0;

  .box-name {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .box-input-format {
    flex: 1;
    .input-format {
      height: 100%;
      padding: 15px 5px;
    }
  }

  .footer {
    padding: 45px 0;
    text-align: right;
    .btn + .btn {
      margin-left: 5px;
    }
    .btn {
      width: 120px;
      height: 42px;
    }
  }
}
</style>
