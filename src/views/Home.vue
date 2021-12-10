<template>
  <div class="home" :style="{ height: '100vh' }">
    <div class="h-100 w-100 p-15" :style="{ height: '100%' }">
      <h2>{{ poem.title }}</h2>
      <p :style="{ whiteSpace: 'pre-wrap', lineHeight: '2em' }">
        {{ poem.body }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Poem } from '../classes/poem';

@Options({
  components: {},
  data() {
    return {
      poem: Poem,
    };
  },

  methods: {
    loadPoem() {
      this.poem = Poem.placeholder();
    },
  },

  mounted() {
    this.loadPoem();
    Poem.logCodes();
  },
})
export default class Home extends Vue {}
</script>
