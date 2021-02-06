<template>
  <Layout>
    <el-row>
      <el-col
        :span="8"
        v-for="(post, index) in posts"
        :key="post.node.id"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            :src="`http://106.75.119.171:1337${post.node.image.url}`"
            class="image"
            style="height:200px"
          />
          <div style="padding: 14px;">
            <span>{{ post.node.title }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">想吃</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </Layout>
</template>
<page-query>
query{
  allStrapiPost{
    edges{
     node{
     id
     title
     content
     image{
       url
      }
     }
    }
   }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {
    posts() {
      return this.$page.allStrapiPost.edges;
    },
  },
  mounted() {
    console.log(this.posts);
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
