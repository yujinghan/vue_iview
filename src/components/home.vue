<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">管理平台</div>
          <!-- <Submenu class="layout-nav" name='0'>
            <template slot="title">
              <Icon type="ios-man"></Icon>
              <span>操作</span>
            </template>
            <MenuItem name='0-1'>修改密码</MenuItem>
            <MenuItem name='0-1'>退出</MenuItem>
          </Submenu>-->
        </Menu>
      </Header>
      <Layout style="height:calc(100vh - 64px)">
        <Sider
          :style="{background: '#515a6e'}"
          collapsible
          :collapsed-width="78"
          v-model="isCollapsed"
        >
          <!-- 手风琴模式accordion，展开一个收起其他下拉菜单 -->
          <Menu
            :accordion="true"
            @on-select="selectItems"
            @on-open-change="isCollapsed=false"
            :active-name="activeName"
            theme="dark"
            width="auto"
            ref="leftmenu"
            :class="menuitemClasses"
            :open-names="[opename]"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-man"></Icon>
                <span>可视化插件</span>
              </template>
              <MenuItem name="1-1" to="/">Ant-v使用</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-man"></Icon>
                <span>用户管理</span>
              </template>
              <MenuItem name="2-1" to="/userList">翻牌器实现</MenuItem>
              <MenuItem name="2-2" to="/userstatisc">vuex-demo</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="md-cog" />
                <span>地图下钻</span>
              </template>
              <MenuItem name="3-1" to="/proMap">地图下钻---省</MenuItem>
              <MenuItem name="3-2" to="/cityMap">地图下钻---市</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-pie" />
                <span>编辑器</span>
              </template>
              <MenuItem name="4-1" to="/articlelist">tinymce</MenuItem>
              <MenuItem name="4-2" to="/timu2">新建题目</MenuItem>
              <MenuItem name="4-3" to="/timu1">题目列表</MenuItem>
              <MenuItem name="4-4" to="/timu3">试卷预览</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '20px 24px'}">
          <router-view></router-view>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      isCollapsed: false,
      opename: [],
      activeName: ""
    };
  },
  methods: {
    selectItems(name) {
      this.isCollapsed = false;
      if (name.startsWith("0")) {
        this.opename = [];
        this.$nextTick(() => {
          this.$refs.leftmenu.updateOpened();
        });
      }
    }
  },
  created() {
    //利用if做个非空验证
    if (this.$route.meta && this.$route.meta.order) {
      this.activeName = this.$route.meta.order;
      console.log(this.$route.meta.order);
      //将order做分割拿出第一个值给opename，使其动态展开
      var submenuname = this.$route.meta.order.split("-")[0];
      if (submenuname !== "0") {
        this.opename.push(submenuname);
      }
    }
  },
  watch: {
    isCollapsed(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.leftmenu.updateOpened();
        });
      }
    }
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 150px;

  margin-left: 1490px;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}

.collapsed-menu .ivu-icon-ios-arrow-down {
  display: none;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
