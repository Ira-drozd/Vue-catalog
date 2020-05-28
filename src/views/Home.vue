<template>
    <div>
        <Header>
            <h1>{{headerPage}}</h1>
            <h2 slot="subtitle">Slots</h2>
            <span>second slot</span>
        </Header>


        <div class="container">
            <div class="row" v-for="post in posts" :key="post.id">
                <div  class="col s12 m12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Card Title #{{post.id}}</span>
                            <p>{{post.title}}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
        </div>

</div>


    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import Header from "../components/app/Header";

    export default {
        name: 'Home',
        data() {
            return {
                headerPage: 'Home',
                posts: []
            }
        },
        async mounted() {
            const res = await fetch(
                 'https://jsonplaceholder.typicode.com/todos?_limit=3'
            )
            const posts = await res.json();
            this.posts = posts;
        },
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>
