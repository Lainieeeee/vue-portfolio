const app = Vue.createApp({
    data() {
        return {
            projects: [],  // 指定したID番号のデータが入る配列
            idsToDisplay: [2, 4]  // 表示したいID番号の配列
        };
    },
    methods: {
        fetchData() {
            axios.get('./filterV1.json')
            // axios.get('./projects.json')
                .then(response => {
                    // 指定したID番号のデータをフィルタリングして取得
                    this.projects = response.data.filter(project => this.idsToDisplay.includes(project.id));
                    this.initFancybox();
                })
                .catch(error => {
                    console.error('Error fetching project data:', error);
                });
        },
        initFancybox() {
            this.$nextTick(() => {
                this.projects.forEach((project, index) => {
                    Fancybox.bind(`#gallery${index + 1} [data-fancybox="gallery${index + 1}"]`, {});
                });
            });
        }
    },
    mounted() {
        this.fetchData();
    }
});

app.mount('#app');