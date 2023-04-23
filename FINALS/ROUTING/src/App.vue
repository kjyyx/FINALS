<template>
  <div id="app">
    <!-- <router-view/> -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Brisk Car Rental Services</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/Home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Gallery">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/About">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Contact">Contact</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div class = "spacer"><router-view/></div>
      <!-- Footer-->
        <footer class="bg-dark py-4 mt-auto">
          <div class="container px-5">
              <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                  <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; BriskVRS 2023</div></div>
                  <div class="col-auto">
                      <a class="link-light small" href="#!">Privacy</a>
                      <span class="text-white mx-1">&middot;</span>
                      <a class="link-light small" href="#!">Terms</a>
                      <span class="text-white mx-1">&middot;</span>
                      <a class="link-light small" href="#!">Contact</a>
                  </div>
              </div>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d1d1d;
  font-size: 20px;
}

.spacer {
  margin-top: 35px;
  margin-bottom: -50px;
}

.navbar {
  height: 4rem; /* adjust to desired height */
}

.navbar-nav {
  line-height: 3rem; /* adjust to desired height */
}

</style>

<style>
  h1{
    margin-top: -20px;
    margin-bottom: 15px;
  }
</style>
