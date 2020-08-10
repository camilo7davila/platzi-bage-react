const BASE_API = 'https://platzi-badges.herokuapp.com/api/v1';

class Api {
    async getCharacters() {
        const query = await fetch(`${BASE_API}`)
        const data = await query.json();
        return data
    }

    async postBadge(dataForm) {
        const query = await fetch(BASE_API, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(dataForm)
        })
        const data = await query.json();
        return data
    }

    async getBadgeById(id) {
        const query = await fetch(`${BASE_API}/${id}`)
        const data = await query.json();
        return data
    }

    async editBadgeById(id, dataForm) {
        const query = await fetch(`${BASE_API}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(dataForm)
        })
        const data = query.json();
        return data
    }

    async deleteBadgeById(id) {
        const query = await fetch(`${BASE_API}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            }
        })
        const data = query.json();
        return data
    }
}

export default new Api()