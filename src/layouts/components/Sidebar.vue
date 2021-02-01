<template>
  <div>
    <el-card shadow="never">
      <el-menu>
        <el-menu-item
          v-for="item in constantRouterMap"
          :key="item.title"
          :index="item.id"
        >
          <i :class="item.icon"></i>
          <g-link :to="item.url">{{ item.title }}</g-link>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentUrl: "",
      menuList: [],
      constantRouterMap: [
        { id: 1, title: "最新动态", icon: "el-icon-star-off", url: "/news/" },
        {
          id: 2,
          title: "博客列表",
          icon: "el-icon-edit-outline",
          url: "/posts",
        },
        {
          id: 3,
          title: "关于我们",
          icon: "el-icon-document",
          url: "/about",
        },
      ],
    };
  },
  mounted() {
    let arr = this.$route.path.split("/");
    this.active = "/" + arr[1] + "/" + arr[2];
  },
};
</script>
