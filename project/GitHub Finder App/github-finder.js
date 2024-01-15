// github-finder.js
import GithubUser from './github-user.js';

class GithubFinder {
    constructor() {
        this.searchBar = document.querySelector('.search-bar');
        this.profileSection = document.querySelector('.profile_info-section');
        this.reposSection = document.querySelector('.latest_repos-section');
    }

    async searchUser() {
        const username = this.searchBar.value;
        const user = new GithubUser(username);
        const data = await user.fetchProfile();

        const html =  `
        <div class="profile_info-content">
            <div class="profile_info-img">
                <img src="${data.avatar_url}" alt="profile image"/>
                <a href="${data.html_url}" target="_blank">
                    <button>Visit GitHub Profile</button>
                </a>
            </div>

            <div class="porfile_info-detail">
                <div class="detail-button">
                    <div>Public Repos: ${data.public_repos}</div>
                    <div>Public Gists: ${data.public_gists}</div>
                    <div>Followers: ${data.followers}</div>
                    <div>Following: ${data.following}</div>
                </div>
                
                <div class="detail-content">
                    <div>Company: ${data.company || 'N/A'}</div>
                    <div>Website/Blog: ${data.blog || 'N/A'}</div>
                    <div>Location: ${data.location || 'N/A'}</div>
                    <div>Member Since: ${data.created_at || 'N/A'}</div>
                </div>
            </div>
        </div>
        `;

        this.profileSection.innerHTML = html;
    }

    async fetchRepos() {
        const username = this.searchBar.value;
        const user = new GithubUser(username);
        const repos = await user.fetchRepos();

        let html = '<h3>Latest Repos</h3>';
        for (let repo of repos) {
            html += `
            <div class="latest_repos-content">
                ${repo.name}
                <div>Stars: ${repo.stargazers_count}</div>
                <div>Watchers: ${repo.watchers_count}</div>
                <div>Forks: ${repo.forks_count}</div>
            </div>
            `;
        }

        this.reposSection.innerHTML += html;
    }
}

export default GithubFinder;