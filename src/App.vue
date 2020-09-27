<template>
  <div id="app" class="content">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat Alternates', sans-serif;
}

.content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
}




.nav {
    position: relative;
    padding: 2em;
}
.right-i {
    position: absolute;
    top: 20px;
    right: 20px;
}
.navigation {
    list-style: none;
    display: inline;
}

.link-item{
    cursor: pointer;
    font-size: 20px;
    color: #2d2e2e;
    font-weight: 700;
    text-decoration: none;
}



@media screen and (max-width: 600px)  {
    .content {
        margin: 10px;
    }
}
</style>
