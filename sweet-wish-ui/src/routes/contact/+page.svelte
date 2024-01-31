<script>
    let name = '';
    let email = '';
    let message = '';

    function handleSubmit() {
        console.log("Form submitted:", { name, email, message });
    }
</script>

<section class="py-16 bg-[#fae3eb]">
    <div class="container mx-auto grid grid-cols-2 gap-8">
        <div class="max-w-md">
            <h1 class="text-4xl font-bold mb-8">Contact Us</h1>

            <form on:submit|preventDefault={handleSubmit}>
                <div class="mb-4">
                    <label for="name" class="block text-gray-700">Vaše ime:</label>
                    <input type="text" id="name" bind:value={name} class="w-full border p-2" required>
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Vaša email adresa:</label>
                    <input type="email" id="email" bind:value={email} class="w-full border p-2" required>
                </div>

                <div class="mb-4">
                    <label for="message" class="block text-gray-700">Vaša poruka:</label>
                    <textarea id="message" bind:value={message} class="w-full border p-2" rows="4" required></textarea>
                </div>

                <button type="submit" class="bg-pink-500 text-white p-2">Pošalji</button>
            </form>
        </div>

        <div>
            <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
            <p>Email: zeljka.lozic69@gmail.com</p>
            <p>Telefon: 097 737 7166</p>
            <p>Radni radni: Pon-Pet, 08:00 - 16:00</p>
            <br>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.9084952343278!2d18.40974836618898!3d45.32292607269567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x268b19eaf3f8b15d%3A0x6cefe475adf82c17!2sSlatka%20%C5%BDelja!5e0!3m2!1sen!2shr!4v1706719714324!5m2!1sen!2shr"
                    width="100%"
                    height="auto"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</section>