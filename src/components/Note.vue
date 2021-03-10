<template>
  <div>
    <div v-if="spinner" id="spinner">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-if="content">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" class="mx-auto">
            <h3>Notes:</h3>
            <div v-for="(myNote, index) in allNotes" :key="(myNote, index)" class="my-5">
              <v-card elevation="2" class="py-4 px-4">
                <h3>{{ myNote.title }}</h3>
                <p>
                  {{ myNote.text }}
                </p>
                <v-btn color="error" @click="aDeleted(index)">Delted</v-btn>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "Note",
  data() {
    return {
      spinner: true,
      content: false,
    };
  },
  computed: {
    ...mapState(["allNotes"]),
    ...mapMutations(["newMNote"]),
  },
  methods: {
    ...mapActions(["aDeleted"]),
  },
  mounted() {
    // for use local data in (localStorage)
    this.newMNote;
    // for spinner and content load
    setTimeout(() => {
      this.spinner = false;
      this.content = true;
    }, 3000);
  },
};
</script>

<style scoped>
#spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
}
</style>
