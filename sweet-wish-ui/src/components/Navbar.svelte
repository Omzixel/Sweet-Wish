<!-- src/components/Navbar.svelte -->

<script lang="ts">
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';

    let isMobileMenuOpen = false;

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    // Close mobile menu when the component is mounted
    onMount(() => {
        isMobileMenuOpen = false;
    });
</script>

<nav class="text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold text-pink-500">Slatka Želja</div>

        <div class="md:hidden">
            <button on:click={toggleMobileMenu} class="text-pink-500 hover:text-pink-300 focus:outline-none transition">
                <!-- Hamburger icon for mobile -->
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>

        <div class="hidden md:flex space-x-4 text-black">
            <a href="#" class="hover:text-pink-300">Početna</a>
            <a href="#" class="hover:text-pink-300">Proizvodi</a>
            <a href="#" class="hover:text-pink-300">O nama</a>
            <a href="#" class="hover:text-pink-300">Kontakt</a>
        </div>

        {#if isMobileMenuOpen}
            <div in:slide="{{ duration: 300 }}" class="md:hidden absolute top-16 right-4 bg-white border rounded-md shadow-md">
                <a href="#" class="bg-gray-500 block px-4 py-2 hover:text-pink-100">Početna</a>
                <a href="#" class="bg-gray-500 block px-4 py-2 hover:text-pink-100">Proizvodi</a>
                <a href="#" class="bg-gray-500 block px-4 py-2 hover:text-pink-100">O nama</a>
                <a href="#" class="bg-gray-500 block px-4 py-2 hover:text-pink-100">Kontakt</a>
            </div>
        {/if}
    </div>
</nav>

<style>
    /* Add your custom styles here */
</style>
