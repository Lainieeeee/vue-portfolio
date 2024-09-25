const app = Vue.createApp({
    data() {
        return {
            projects: [],
            currentPage: 1,
            itemsPerPage: 12,
            currentCategory: 'all'
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredProjects.length / this.itemsPerPage);
        },
        displayedProjects() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredProjects.slice(startIndex, startIndex + this.itemsPerPage);
        },
        uniqueCategories() {
            const categories = this.projects.reduce((acc, project) => {
                return acc.concat(project.categories);
            }, []);
            return [...new Set(categories)];
        },
        filteredProjects() {
            if (this.currentCategory === 'all') {
                return this.projects;
            } else {
                return this.projects.filter(project => project.categories.includes(this.currentCategory));
            }
        }
    },
    methods: {
        fetchData() {
            // axios.get('./filterV1.json')
            axios.get('./projects-jp.json')
                .then(response => {
                    this.projects = response.data;
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
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        filterProjects(category) {
            this.currentCategory = category;
            this.currentPage = 1;
        }
    },
    mounted() {
        this.fetchData();
    },
    updated() {

        // Fade in only once
        $(".inview").on("inview", function () {
            $(this).addClass("is-show").css("transition-delay", ($(this).index() * 0.1) + "s");
        });

        // Repeatedly fade in
        $(".inviewRe").on("inview", function (event, isInView) {
            if (isInView) {
            $(this).stop().addClass("is-show").css("transition-delay", ($(this).index() * 0.1) + "s");
            } else {
            $(this).stop().removeClass("is-show").css("transition-delay", ($(this).index() * 0.1) + "s");
            }
        });

    }
});

app.mount('#app');
