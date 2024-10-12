async function fetchData() {
    try {
        const flagName = document.getElementById("textBox").value.toLowerCase();
        const para = document.querySelector(".para");

        const response = await fetch(`https://restcountries.com/v3.1/name/${flagName}`);

        if (!response.ok) {
            para.textContent = "Country Not Found!";
            const img = document.getElementsById('images');
            img.style.display = "none"
            throw new Error("Could not fetch source");
        } else {
            const data = await response.json();
            const country = data[0];
            const flagImg = country.flags.png;

            const imgElement = document.getElementById('images');
            imgElement.src = flagImg;
            imgElement.style.display = "block";

            para.textContent = "";
        }

    } catch (err) {
        console.error(err);
    }
}

// Add event listener for 'Enter' key
const textBox = document.getElementById('textBox');
textBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevents form submission
        fetchData();  // Trigger the search function
    }
});
