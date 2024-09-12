async function fetchData() {
    try {
        const flagName = document.getElementById("textBox").value.toLowerCase();

        const response = await fetch(`https://restcountries.com/v3.1/name/${flagName}`);

        if (!response.ok) {
            throw new Error("Could not fetch source")
        } else {
            const data = await response.json();

            const country = data[0];
            const flagImg = country.flags.png; 

            const imgElement = document.getElementById('images');
            imgElement.src = flagImg;
            imgElement.style.display = "block"
        }

    } catch (err) {
        console.error(err);
    }
}
