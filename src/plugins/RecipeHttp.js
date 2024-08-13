const rootUrl = 'https://dummyjson.com/recipes'

const RecipeHttp = {
    post: (url, data) => {
        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        }
        return new Promise(resolve => {
            fetch(rootUrl + url, options)
                .then(res => res.json())
                .then(res => {
                    resolve(res)
                })
        })
    },
    get: (url) => {
        return new Promise(resolve => {
            fetch(rootUrl + url)
                .then(res => res.json())
                .then(res => {
                    resolve(res)
                })
        })
    }
}

export default RecipeHttp