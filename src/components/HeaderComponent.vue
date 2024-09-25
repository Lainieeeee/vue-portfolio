<template>
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/#about">About</router-link>
    <router-link to="/#experience">Experience</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/#expertise">Expertise</router-link>
    
    <router-link to="/jp">Home</router-link>
    <router-link to="/jp/projects">Projects</router-link> -->

    <!-- header -->
    <header class="bg-ivory border-bottom border-1 border-orange position-fixed start-0 top-0 w-100">
        <nav class="navbar navbar-expand-lg p-0">
            <div class="container-fluid container-lg detailInner py-4">
    
                <div class="d-lg-none">
                    <router-link to="/jp" class="bg-orange text-white text-decoration-none p-3 rounded-pill d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-earth-americas"></i>
                        <span class="ps-2 lh-1">JP</span>
                    </router-link>
                </div>
    
                <div class="logo pe-lg-5">
                    <router-link to="/" class="navbar-brand text-orange fs-1 m-0 p-0">PORTFOLIO</router-link>
                </div>
    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <!-- hamburgerMenu -->
                    <div class="hamburgerMenu ms-5"><span></span><span></span><span></span></div>
                </button>
    
                <div class="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                    <ul class="navbar-nav align-items-center mb-4 mb-lg-0">
                        
                        <li class="nav-item pe-lg-5 mt-4 mt-lg-0">
                            <router-link to="/#about" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item pe-lg-5 mt-4 mt-lg-0">
                            <router-link to="/#experience" class="nav-link">Experience</router-link>
                        </li>
                        <li class="nav-item pe-lg-5 mt-4 mt-lg-0">
                            <router-link to="/projects" class="nav-link ">Projects</router-link>
                        </li>
                        <li class="nav-item pe-lg-5 mt-4 mt-lg-0">
                            <router-link to="/#expertise" class="nav-link">Expertise</router-link>
                        </li>
                        <li class="d-none d-lg-block">
                            <router-link to="/jp" class="bg-orange text-white text-decoration-none p-3 rounded-pill d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-earth-americas"></i>
                                <span class="ps-2 lh-1">JP</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
    
            </div>
        </nav>
    </header>
    <div class="d-none d-lg-block" style="height:67.5px;"></div>
    <div class="d-lg-none" style="height:66px;"></div>


</template>
  
<script>

</script>

<style scoped>

</style>
