module.exports = {
    createAuthor: {
        nama: 'string',
        gender: {type: 'string', enum: ['Male', 'Female']}
    },
    updateAuthor: {
        nama: {optional: true, type: 'string'},
        gender: {optional: true, type: 'string', enum: ['Male', 'Female']}
    },
}