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
        try {
            const response = await api.get(`/users/${userName.replace(" ", "-")}/repos`);
            for (var repo of response.data) {
                const { name, html_url, description } = repo;
                this.repositories.push({
                    name,
                    description,
                    html_url,
                });
                this.render(name, description, html_url);
            }
        } catch (ex) {
            this.error(userName);
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
    error(nameUser) {
        var content = document.createElement('div');
        var icon = document.createElement('i');
        var msg = document.createElement('label');
        var msgString = document.createTextNode(`Usuário "${nameUser}" não encontrado!`)
        content.setAttribute('class', 'error-content');
        icon.setAttribute('class', 'error-icon far fa-frown');
        msg.setAttribute('class', 'error-msg');
        msg.appendChild(msgString);
        content.appendChild(icon);
        content.appendChild(msg);
        this.listEl.appendChild(content);
    }

}
new App();