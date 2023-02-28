import axios from 'axios'

const getRepos = async (search) => {
    const repos = await axios.get(`/repositories?search=${search}`);

    return repos.data;
}

const reposService = {
    getRepos
}

export default reposService;