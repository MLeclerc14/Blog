<template>
    <div class="container">
        <sidenav></sidenav>
        <transition name="md-router" appear>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'Root'
}
</script>
