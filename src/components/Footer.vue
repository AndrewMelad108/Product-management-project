<template>
  <el-row>
    <el-col :span="24">
      <div class="overflow-hidden">
        <footer>
          <div class="copy-right">
            copyright©:2021 your template
            <span class="color-word">Final</span> .lnc
          </div>
        </footer>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  background: #a35709;
  color: black;
  font-size: 20px;
  text-align: center;
  text-transform: capitalize;
  margin: 0 !important;
  padding: 0 0 10px 0 !important;
  z-index: 99999999999999;
  .copy-right {
    padding: 10px;
    .color-word {
      color: #fff;
      text-transform: uppercase;
    }
  }
}
</style>
