const axios = require('axios')
const { ReposModel } = require('../utils/ReposUtils')

const getRepo = async (req, res) => {
    try {
        const searchValue = req.query.search || 'stars:%3E1';

        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchValue}&sort=stars`);
        const reposItems = ReposModel(response.data.items);

        res.status(200).json(
            {
                repos: reposItems
            })
        
    } catch (error) {
        res.status(500).json({ message: "Failed to get repositories: " + error})
    }
}



module.exports = {
    getRepo
}