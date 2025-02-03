document.querySelectorAll(".icon").forEach(icon => {
    icon.addEventListener("click", (event) => {
        console.log(`Clicked icon ID: ${event.target.id}`);
    });
});
