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

    <n-modal v-model:show="showDeleteConfirm" transform-origin="center">
      <n-card style="width: 450px" role="dialog" aria-modal="true">
        <DeleteConfirm
          @cancel="showDeleteConfirm = false"
          @discard="doDiscard"
        />
      </n-card>
    </n-modal>
  </main>
</template>

<script lang="ts">
import { useDataStore } from "@/stores/data";
import type { BodyFormat } from "@/components/bodyFormat.interface";
import DeleteConfirm from "@/components/DeleteConfirm.vue";

export default {
  setup() {
    return { data: useDataStore() };
  },
  components: { DeleteConfirm },
  data() {
    return {
      bodyFormat: { content: "" } as BodyFormat,
      showDeleteConfirm: false,
    };
  },
  computed: {
    id(): string {
      return (this.$route.params.id || "").toString();
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
      // TODO: Call Get BodyFormat API
      this.bodyFormat =
        this.data.bodyFormats.find((format) => {
          return format._id === this.id;
        }) || ({} as BodyFormat);
    },
    clickEditBtn() {
      // TODO: 수정 작업
    },
    clickDiscardBtn() {
      this.showDeleteConfirm = true;
    },
    doDiscard() {
      // TODO: Call Remove BodyFormat
      this.data.remoteBodyFormat(this.id);
      this.showDeleteConfirm = false;
      let path = "/";
      if (this.data.bodyFormats.length) {
        path = `/bodyFormat/${this.data.bodyFormats[0]._id}`;
      }
      this.$router.push(path);
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
