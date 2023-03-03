module.exports = {
    createBook: {
        isbn: 'string',
        judul: 'string',
        author_id: 'number',
        pub_id: 'number'
    },
    updateBook: {
        isbn: {optional: true, type: 'string'},
        judul: {optional: true, type: 'string'},
        author_id: {optional: true, type: 'number'},
        pub_id: {optional:true, type: 'number'}
    },
}