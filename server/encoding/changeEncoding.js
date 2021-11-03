
class changeEncoding {

    ewok = (data) => {
        for (let key in data) {
            
            const regexVowels = /[aeiou]/ig
            const regexConstants = /[qwrtypsdfghjklzxcvbnm]/ig

            if (data[key] instanceof Array) {
                for (let i in data[key]) {
                    data[key][i] = data[key][i].replace(regexVowels, 'i').replace(regexConstants, 'b')
                }
            } else {
                data[key] = data[key].replace(regexVowels, 'i').replace(regexConstants, 'b')
            }
        }

        return data
    }
}


module.exports = new changeEncoding()