<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" class="mx-auto">
        <h3>Post Note:</h3>
        <v-text-field
          class="my-6"
          label="Note Title"
          outlined
          clearable
          v-model="note.title"
        ></v-text-field>
        <v-textarea
          outlined
          name="input-7-4"
          label="Write a Note"
          clearable
          v-model="note.text"
        ></v-textarea>
        <v-btn block style="color: #fff; background-color: #333" @click="addNote()">
          Add Note
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Post",
  data() {
    return {
      note: {
        title: "",
        text: "",
      },
    };
  },
  methods: {
    ...mapActions(["aNote"]),
    addNote() {
      const { title, text } = this.note;
      const note = {
        note: {
          title,
          text,
        },
      };
      this.aNote(note);
    },
  },
};
</script>

<style></style>
