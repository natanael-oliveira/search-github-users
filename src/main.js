import api from './api';
class App {
    constructor() {
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repos-list');
        this.inputEl = document.querySelector('input[name=repository]');
        this.repositories = [];
        this.registerHandlers();
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepos(event);
    }
    async addRepos(event) {
        event.preventDefault();
        this.listEl.innerHTML = '';
        const userName = this.inputEl.value;
        if (userName === '') {
            return;
        }
        const response = await api.get(`/users/${userName}/repos`);
        const { avatar_url } = response;
        for (var repo of response.data) {
            const { name, html_url, description } = repo;
            this.repositories.push({
                name,
                description,
                html_url,
            });
            this.render(name, description, html_url);
        }
    }
    render(nameRepo, descriptionRepo, urlRepo) {
        var name = document.createTextNode(nameRepo);
        var description = document.createTextNode(descriptionRepo);
        var html_url = urlRepo;
        // --------------------------
        var linkRepo = document.createElement('a');
        var divRepoContent = document.createElement('div');
        var divRepoText = document.createElement('div');
        var titleRepo = document.createElement('h1');
        var textRepo = document.createElement('p');
        // --------------------------
        linkRepo.setAttribute('class', 'repo-link text-secondary');
        divRepoContent.setAttribute('class', 'repo-card d-md-flex align-items-center shadow-lg col-md-6 col-10 p-2 ml-md-4 mb-3 ml-auto mr-auto');
        divRepoText.setAttribute('class', 'col mt-3')
        titleRepo.setAttribute('class', 'repo-name text-dark')
        textRepo.setAttribute('class', 'text-secondary');
        // --------------------------
        titleRepo.appendChild(name);
        textRepo.appendChild(description);
        linkRepo.setAttribute('href', html_url);
        // --------------------------
        linkRepo.appendChild(titleRepo);
        divRepoText.appendChild(linkRepo);
        divRepoText.appendChild(textRepo);
        divRepoContent.appendChild(divRepoText);
        this.listEl.appendChild(divRepoContent);
    }

}
new App();