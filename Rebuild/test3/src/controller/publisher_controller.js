const { Publisher, Book, Author } = require('../models');
const schema = require('../validation');
const Validator = require('fastest-validator');
const v = new Validator;

module.exports = {
    index: async (req, res, next) => {
        try {
            const publishers = await Publisher.findAll();

            return res.status(200).json({
                status: 'OK',
                message: 'Get All Publishers Success',
                data: publishers
            });
        } catch (err) {
            next(err);
        }
    },
    
    create: async (req, res, next) => {
        try {
            const { nama, kota } = req.body;

            const body = req.body;
            const validate = v.validate(body, schema.publisher.createPublisher);

            if (validate.length) {
                return res.status(400).json(validate);
            }

            const created = await Publisher.create({
                nama,
                kota
            });

            return res.status(201).json({
                status: 'CREATED',
                message: 'New Publisher Created',
                data: created
            });
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            let { nama, kota } = req.body;

            const body = req.body;
            const validate = v.validate(body, schema.publisher.updatePublisher);

            if (validate.length) {
                return res.status(400).json(validate);
            }

            const publisher = await Publisher.findOne({ where: { id: id } });
            if (!publisher) {
                return res.status(404).json({
                    status: 'NOT_FOUND',
                    message: `Publisher Didn't Exist`,
                    data: null
                })
            }

            if (!nama) nama = publisher.nama;
            if (!kota) kota = publisher.kota;

            const updated = await Publisher.update({
                nama,
                kota
            }, {
                where: {
                    id: id
                }
            })

            return res.status(200).json({
                status: 'OK',
                message: 'Update Publisher Success',
                data: updated
            })
        } catch (err) {
            next(err);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req.params;

            const publisher = await Publisher.findOne({
                where: {
                    id: id
                }
            });

            if (!publisher) {
                return res.status(404).json({
                    status: 'NOT_FOUND',
                    message: `Publisher Didn't Exist`,
                    data: null
                });
            }

            const deleted = await Publisher.destroy({
                where: {
                    id: id
                }
            });

            return res.status(200).json({
                status: 'OK',
                message: 'Delete Publisher Success',
                data: deleted
            });
        } catch (err) {
            next(err);
        }
    }
}