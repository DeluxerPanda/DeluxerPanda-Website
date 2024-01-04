const username = 'DeluxerPanda';
const apiUrl = `https://api.github.com/users/${username}/repos`;

// Fetch user repositories from GitHub API
fetch(apiUrl)
    .then(response => response.json())
    .then(repositories => {

        const repositoriesList = document.getElementById('repositories-list');
        repositories.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        repositories.forEach(repo => {
            if (repo.name.toLowerCase() === username.toLowerCase()) {
                return; // Skip the repository
            }
  
                
            const projectBox = document.createElement('div');
            projectBox.className = 'project-box';
            projectBox.innerHTML = `
                <h2>${repo.name}</h2>
                <p>${repo.description || 'No description available'}</p>
                <a href="${repo.html_url}" class="black-button">GitHub</a>
            `;
            if (repo.archived) {
            projectBox.innerHTML = `
            <p class="Archived">Archive</p>
                <h2>${repo.name}</h2>
                <p>${repo.description || 'No description available'}</p>
                <a href="${repo.html_url}" class="black-button">GitHub</a>
            `;
                }
            // Check if the repository has releases
            const releasesUrl = `https://api.github.com/repos/${username}/${repo.name}/releases`;
            fetch(releasesUrl)
                .then(response => response.json())
                .then(releases => {
                    if (releases.length > 0) {
                        const latestRelease = releases[0];
                        projectBox.innerHTML += `      <a href="${latestRelease.assets[0].browser_download_url}" class="black-button">Ladda ner</a>`;
                    }                            
                    repositoriesList.appendChild(projectBox);
                    projectBox.style.display = 'block'; // Show the project box after updating its content


                    projectBox.innerHTML += `<p>${formattedDate}</p>`;
                })
                .catch(error => console.error(`Error fetching releases for ${repo.name}:`, error));
            });
    })
    
    .catch(error => console.error('Error fetching repositories:', error));