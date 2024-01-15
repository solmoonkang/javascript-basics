// github-finder.js
import GithubUser from './github-user.js';

class GithubFinder {
    constructor() {
        this.searchBar = document.querySelector('.search-bar');
        this.profileSection = document.querySelector('.profile_info-section');
        this.reposSection = document.querySelector('.latest_repos-section');
        this.user = new GithubUser(this.searchBar.value);
    }

    async searchUser() {
        try {
            const username = this.searchBar.value;
            const user = new GithubUser(username);

            this.user.username = this.searchBar.value;
            const data = await this.user.fetchProfile();

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

            this.profileSection.innerHTML = html;
        } catch (error) {
            console.error(`An error occurred while fetching the profile: ${error.message}`);
        }
    }

    async searchRepos() {
        try {
            const username = this.searchBar.value;
            const user = new GithubUser(username);

            this.user.username = this.searchBar.value;
            const repos = await this.user.fetchRepos();

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