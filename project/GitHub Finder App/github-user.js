// github-user.js
class GithubUser {
    constructor(username) {
        this.username = username;
        this.apiBaseURL = "https://api.github.com/users/";
    }

    async fetchProfile() {
        try {
            const response = await fetch(`${this.apiBaseURL}${this.username}`);
            if (!response.ok) {
                throw new Error(`An error occurred: ${response.statusText}`);
            }
            const data = await response.json();
            return [null, data];
        } catch (error) {
            return [error, null];
        }
    }

    async fetchRepos() {
        try {
            const response = await fetch(`${this.apiBaseURL}${this.username}/repos?sort=created&direction=desc&per_page=5`);
            if (!response.ok) {
                throw new Error(`An error occurred: ${response.statusText}`);
            }
            const data = await response.json();
            return [null, data];
        } catch (error) {
            return [error, null];
        }
    }
}

export default GithubUser;