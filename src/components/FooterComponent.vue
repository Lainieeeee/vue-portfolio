<template>
    
    <!-- footer -->
    <footer class="border-top border-1 border-orange">
        <div class="container detailInner py-4">
            <p class="copyRight text-center fs-5">
                <small>&copy; {{ currentYear }}</small>
            </p>
        </div>
    </footer>

</template>
  
<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const currentYear = ref(null);

    // 現在の年を取得
    onMounted(() => {
      const now = new Date();
      currentYear.value = now.getFullYear(); // 現在の年を取得
    });

    return {
      currentYear,
    };
  },
};
</script>

<style scoped>

</style>
