// main.js
import GithubFinder from './github-finder.js';

const finder = new GithubFinder();

document.querySelector('.search-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        finder.searchUser();
        finder.searchRepos();
    }
});