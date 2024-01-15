// github-user.js
class GithubUser {
    constructor(username) {
        this.username = username;
    }

    async fetchProfile() {
        const response = await fetch(`https://api.github.com/users/${this.username}`);
        const data = await response.json();
        return data;
    }

    async fetchRepos() {
        const response = await fetch(`https://api.github.com/users/${this.username}/repos?sort=created&direction=desc&per_page=5`);
        const data = await response.json();
        return data;
    }
}

export default GithubUser;