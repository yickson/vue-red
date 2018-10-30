<script>
import LeftNavBar from '@components/left-nav'
import TopNavBar from '@components/top-nav'
import Footer from '@components/footer'

export default {
  components: { LeftNavBar, TopNavBar, Footer },
}
</script>

<template>
  <div>
    <LeftNavBar/>
    <div
      id="right-panel">
      <TopNavBar/>
      <slot/>
    </div>
  </div>
</template>

<style>
body {
  font-size: 14px;
  background: #f1f2f7;
}
.form-control {
  font-size: inherit;
}
select.form-control:not([size]):not([multiple]) {
  height: auto;
}
#right-panel .page-header h1 {
  padding: 15px 0;
  font-size: 18px;
}
#right-panel {
  display: table-cell !important;
  padding-left: 0 !important;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
#right-panel .breadcrumbs {
  display: inline-block;
  width: 100%;
  padding: 0 5px;
  margin-top: 0;
  background-color: #fff;
}

#right-panel .page-header {
  min-height: 50px;
  padding: 0 15px;
  margin: 0;
  background: #fff;
  border-bottom: 0;
}

#right-panel header.header {
  display: inline-block;
  width: 100%;
  padding: 15px 20px 13px 20px;
  clear: both;
  background: #fff;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}
.card {
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
}

/*general */

.content {
  float: left;
  width: 100%;
  padding: 0 20px;
}
.mt-3,
.my-3 {
  margin-top: 1rem !important;
}
</style>
