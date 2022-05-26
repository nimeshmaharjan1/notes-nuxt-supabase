<script setup lang="ts">
const { supabase } = useSupabase();
const { user } = useAuth();
const { isDarkMode } = useDarkMode();
interface FormData {
  title: string;
  note: string;
}
const formData = ref({
  title: "",
  note: "",
});
const handleSubmit = async () => {
  if (!formData.value.title || !formData.value.note) return;
  await supabase.from("notes").insert({
    title: formData.value.title,
    note: formData.value.note,
    user_id: user.value.id,
  });
  formData.value.title = "";
  formData.value.note = "";
};
</script>
<template>
  <div class="card pb-2" :class="{ 'card-dark': isDarkMode }">
    <div class="card-body">
      <h4>Add Note</h4>
      <input
        class="form-control"
        placeholder="Enter the title here"
        v-model="formData.title"
      />
      <div class="form-group">
        <textarea
          v-model="formData.note"
          class="form-control mt-3"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter the content here"
        ></textarea>
      </div>
      <button class="col-12 btn btn-primary mt-3" @click="handleSubmit">
        Submit
      </button>
    </div>
  </div>
</template>
