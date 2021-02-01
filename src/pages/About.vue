<template>
  <Layout>
    <div v-html="about"></div>
  </Layout>
</template>

<page-query>
query{
 allStrapiAbout{
  edges{
    node{
      content
    }
  }
}
}
</page-query>
<script>
import MarkdownIt from "markdown-it";
export default {
  name: "AboutPage",
  computed: {
    about() {
      const md = new MarkdownIt();
      return md.render(this.$page.allStrapiAbout.edges[0].node.content);
    },
  },
  mounted() {
    console.log(this.about);
  },
};
</script>

<style></style>
