<template>
    <li class="p-4 border rounded-lg space-y-3  overflow-auto">
        <div>
            <a :href="emailLink" class="text-green-500 font-semibold">{{ email }}</a>
        </div>
        <p>{{ message }}</p>
    </li>
</template>
<script>
export default {
    props: ['email', 'message'],
    computed: {
        emailLink() {
            return 'mailto:' + this.email;
        }
    }
}
</script>