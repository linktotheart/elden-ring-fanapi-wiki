<template>
  <section>
    <container>
      <div class="card items-center py-10">
        <h1 class="text-4xl mb-4 font-bold text-center capitalize font-serif">
          {{ category }}
        </h1>

        <blockquote class="text-center text-lg">
          {{ getDescription }}
        </blockquote>
      </div>

      <div class="divider my-10">All {{ category }}</div>

      <div
        class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2"
        v-if="!isLoading && articles && articles.length > 0"
      >
        <Cards
          v-for="art in articles"
          :key="art.id"
          :name="art.name"
          :description="art.description"
          :image="art.image"
        />
      </div>

      <div
        class="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2"
        v-if="isLoading"
      >
        <Skeleton v-for="n in 9" :key="n" />
      </div>

      <div class="pt-10 flex justify-center">
        <Pagination
          :page="page"
          :limit="limit"
          :total="totalArticles"
          @change="paginate"
          :disabled="isLoading"
        />
      </div>
    </container>
  </section>
</template>

<script>
import axios from '@/axios';
import { categories } from '@/data/categories';

export default {
  name: 'NameCategory',
  head() {
    return {
      title: `${this.category} | Page ${this.page}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getDescription,
        },
      ],
    };
  },
  data() {
    return {
      articles: [],
      page: 0,
      limit: 30,
      totalArticles: 0,
      isLoading: false,
    };
  },
  computed: {
    category() {
      return this.$route.params.name;
    },
    getDescription() {
      return categories.find((cat) => cat.name === this.category).description;
    },
  },
  methods: {
    async getArticles() {
      try {
        this.isLoading = true;
        const { data } = await axios.get(`/${this.category}`, {
          params: {
            page: this.page - 1,
            limit: this.limit * this.page,
          },
        });
        this.articles = data.data;
        // scroll to top
        window.scrollTo(0, 0);
        this.totalArticles = data.total;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async paginate(page) {
      this.$router.push({
        query: {
          page,
        },
      });
      this.page = page;
      await this.getArticles();
    },
  },
  async created() {
	this.page = this.$route.query.page || 1;
    await this.getArticles();
  },
};
</script>

<style></style>
