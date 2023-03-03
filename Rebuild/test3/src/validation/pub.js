module.exports = {
    createPublisher: {
        nama: 'string',
        kota: 'string',
    },
    updatePublisher: {
        nama: {optional: true, type: 'string'},
        kota: {optional: true, type: 'string'},
    },
}