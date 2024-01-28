<script context="module" lang="ts">
    // Import global styles
    import 'tailwindcss/tailwind.css';
</script>

<script lang="ts">
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<main>
    <Navbar />

    <section class="py-16 bg-pink-100">
        <div class="container mx-auto ">
            <h1 class="text-4xl font-bold mb-8">Welcome to our Slatka Želja</h1>

            <p class="text-gray-700">
                Discover a delightful world of cakes and cookies crafted with love and passion.
                Indulge in the sweetest treats that will satisfy your cravings.
            </p>
        </div>
    </section>

    <Footer />
</main>

<style>
    /* Add your custom styles here */
</style>
