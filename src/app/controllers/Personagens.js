const axios = require('axios');

class Personagens {
  async index(request, response) {
    const { size = 10, page = 1 } = request.query;

    const { data } = await axios.get('https://rickandmortyapi.com/api/character/?page=1');

    const personagens = data.results.map(personagem => {
      const { id, name, type, status, image, location } = personagem;

      return {
        id,
        name,
        type,
        status,
        image,
        location
      }
    });

    const jump = ((page - 1) * size);

    const result = personagens.slice(((page - 1) * size), jump + Number(size));

    return response.json(result);
  }
}

module.exports = new Personagens;
