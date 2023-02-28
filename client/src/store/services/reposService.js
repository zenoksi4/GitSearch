

const getRepos = async () => {
    const repos = await axios.get('/repositories');

    return repos.data;
}

const reposService = {
    getRepos
}

export default reposService;