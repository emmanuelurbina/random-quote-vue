<template>
    <div>
        <footer class="footer">
            <div class="content">
                <ul class="footer-menu">
                    <li class="link-footer">
                        <a href="https://emmanuelurbina.github.io" class="footer-a">Emmanuel Lucio Urbina</a>
                    </li>
                    <li class="link-footer">
                        <a href="https://devchallenges.io/challenges/8Y3J4ucAMQpSnYTwwWW8" class="footer-a">@DevChallenges.io</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:"FooterComponent"
}
</script>

<style scoped>
.footer {
    font-size: 18px;
    font-weight: 700;
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    margin: 2em 0;
}

.content {
    margin: auto;
}

.footer-menu {
    list-style: none;
}

.link-footer {
    display: inline;
    margin: 0 5px;
}
.footer-a{
    text-decoration: none;
    color: tomato;
}

</style>