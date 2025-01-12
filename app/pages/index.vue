<script lang="ts" setup>
 async function addUser() {
    try {
    const { data, error } = await useFetch('/api/user/add', {
      method: 'POST'
    });

    if (error.value) {
      throw new Error(`HTTP error! ${error.value.message}`);
    }

    console.log('User added successfully', data.value);
  } catch (error) {
    console.error('Error adding user:', error);
  }
 }
</script>

<template>
  <div>
    <button @click="addUser">Add User to DB</button>
  </div>
</template>
