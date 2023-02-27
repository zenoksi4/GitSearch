
const ReposModel = (repos) => {
    const reposModel = repos.map(repo => {
        return {
            name: repo.name,
            stars: repo.stargazers_count,
            update_repo: repo.updated_at,
            url: repo.html_url
        }
    })
    return reposModel;
}

module.exports = {
    ReposModel
}