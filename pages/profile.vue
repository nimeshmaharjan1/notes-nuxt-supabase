<script setup lang="ts">
definePageMeta({
  middleware: "auth", //Anytime this page is opened the middleware is called before the page is rendered
});
const { supabase } = useSupabase();
const { isDarkMode } = useDarkMode();
const { user } = useAuth();
const fetchedNotes = ref();

const rowId: any = ref("");
onMounted(() => {
  getNotes();
});
// from notes table select user_id whose data is equal to the user.id
const getNotes = async () => {
  if (process.client) {
    fetchedNotes.value = await supabase
      .from("notes")
      .select()
      .eq("user_id", user.value.id); //get the notes of the specific user from the database
  }
};
const getId = async () => {
  const { data, error } = await supabase.from("notes").select().eq("id", 1);
  rowId.value = data;
};
const removeNote = async (noteId: number) => {
  await supabase.from("notes").delete().match({ id: noteId });
};
</script>
<template>
  <div class="container pb-4">
    <div class="card mt-4 px-1" :class="{ 'card-dark': isDarkMode }">
      <div class="card-header"><h1>My Notes</h1></div>
      <!-- <button @click="getId">Get ID</button>
      {{ rowId }} -->
      <div class="card-body">
        <NotesForm />
        <section class="notes-section my-3 mt-3" v-if="fetchedNotes">
          <div
            class="card mt-3"
            :class="{ 'card-dark': isDarkMode }"
            v-for="(note, index) in fetchedNotes.data"
            :key="note.id"
          >
            <div class="card-body">
              <h4 class="card-title">{{ index + 1 }}. {{ note.title }}</h4>
              <hr />
              <p>{{ note.note }}</p>
            </div>
            <div class="card-footer">
              <button
                class="btn btn-outline-danger btn-sm"
                @click="() => removeNote(note.id)"
              >
                Remove
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
p {
  font-size: 1.2rem;
  margin-bottom: 0;
}
</style>
