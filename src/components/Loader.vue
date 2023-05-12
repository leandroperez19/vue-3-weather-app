<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  border: 4px solid rgb(0, 0, 0);
  border-left-color: transparent;
  border-radius: 50%;
}

.loader {
  border: 4px solid rgb(0, 0, 0);
  border-left-color: transparent;
  width: 20px;
  height: 20px;
}

.loader {
  border: 4px solid rgb(0, 0, 0);
  border-left-color: transparent;
  width: 30px;
  height: 30px;
  position: relative;
  animation: spin89345 1s linear infinite;
}

@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
