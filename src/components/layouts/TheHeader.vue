<template>
    <header class="mx-auto w-full  py-2 px-6 bg-green-600 text-white">
        <nav class="flex items-center justify-between">
            <h1 class=" font-extrabold text-2xl"><router-link to="/">Find a coach</router-link></h1>
            <ul class="flex space-x-8 h-10 items-center justify-center">
                <li class="header-link"><router-link to="/coaches">All coaches</router-link>
                </li>
                <li class="header-link"><router-link to="/requests">Requests</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
