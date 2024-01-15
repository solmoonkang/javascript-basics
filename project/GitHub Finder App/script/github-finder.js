// github-finder.js
import GithubUser from './github-user.js';

class GithubFinder {
    constructor() {
        this.searchInput = document.querySelector('.search-input');
        this.userProfileSection = document.querySelector('.user-profile-section');
        this.reposSection = document.querySelector('.latest-repos-section');
    }

    async searchUser() {
        try {
            const username = this.searchInput.value;
            const user = new GithubUser(username);
            const data = await user.fetchProfile();

            const html =  `
            <div class="user-profile">
                <div class="user-profile-img">
                    <img src="${data.avatar_url}" alt="profile image"/>
                    <a href="${data.html_url}" target="_blank">
                        <button>Visit GitHub Profile</button>
                    </a>
                </div>

                <div class="user-porfile-detail">
                    <div class="user-stats">
                        <div>Public Repos: ${data.public_repos}</div>
                        <div>Public Gists: ${data.public_gists}</div>
                        <div>Followers: ${data.followers}</div>
                        <div>Following: ${data.following}</div>
                    </div>
                    
                    <div class="user-info">
                        <div>Company: ${data.company || 'N/A'}</div>
                        <div>Website/Blog: ${data.blog || 'N/A'}</div>
                        <div>Location: ${data.location || 'N/A'}</div>
                        <div>Member Since: ${data.created_at || 'N/A'}</div>
                    </div>
                </div>
            </div>
            `;

            this.userProfileSection.innerHTML = html;
        } catch (error) {
            console.error(`An error occurred while fetching the profile: ${error.message}`);
        }
    }

    async searchRepos() {
        try {
            const username = this.searchInput.value;
            const user = new GithubUser(username);
            const repos = await user.fetchRepos();

            let html = '<h3>Latest Repos</h3>';
            for (let repo of repos) {
                html += `
                <div class="repo-card">
                    ${repo.name}
                    <div>Stars: ${repo.stargazers_count}</div>
                    <div>Watchers: ${repo.watchers_count}</div>
                    <div>Forks: ${repo.forks_count}</div>
                </div>
                `;
            }

            this.reposSection.innerHTML += html;
        } catch (error) {
            console.error(`An error occurred while fetching the repos: ${error.message}`);
        }
    }
}

export default GithubFinder;