
async function ghet() {
    const response = await fetch("https://api.github.com/users/deluxerpanda/repos");
    console.log(response.json().then(data => {
        data.forEach(repo => {
            console.log(repo.name, repo.html_url, repo.description, repo.topics);
        });
    }));
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}