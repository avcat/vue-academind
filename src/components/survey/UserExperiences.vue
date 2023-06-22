<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && errorMsg">{{ errorMsg }}</p>
      <ul v-else-if="results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else>No results found.</p>
    </base-card>
  </section>
</template>

<script>
const DB_URL =
  'https://vue-academind-70640-default-rtdb.europe-west1.firebasedatabase.app/vue-academind';
import SurveyResult from './SurveyResult.vue';

const parseExperiences = (experiences) => {
  const parsedExperiences = [];
  for (let id in experiences) {
    const parsedExperienceItem = {
      id,
      name: experiences[id].name,
      rating: experiences[id].rating,
    };
    parsedExperiences.push(parsedExperienceItem);
  }
  return parsedExperiences;
};

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      errorMsg: null,
    };
  },
  methods: {
    async loadExperiences() {
      this.isLoading = true;
      this.errorMsg = null;
      try {
        const experiencesResponse = await fetch(`${DB_URL}/surveys.json`);
        const experiences = await experiencesResponse.json();
        this.results = parseExperiences(experiences);
      } catch (err) {
        this.errorMsg = err;
        console.error(`[Failed to load resources]`, err);
      }
      this.isLoading = false;
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
