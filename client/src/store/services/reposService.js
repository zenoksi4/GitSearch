import axios from 'axios'

const getRepos = async (search) => {
    const repos = await axios.get(`https://git-search-api.onrender.com/repositories?search=${search}`);

    return repos.data;
}

const reposService = {
    getRepos
}

export default reposService;