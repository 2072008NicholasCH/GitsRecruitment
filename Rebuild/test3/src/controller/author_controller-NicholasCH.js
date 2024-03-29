const { Author, Book, Publisher } = require("../models");

module.exports = {
  index: async (req, res, next) => {
    try {
      const authors = await Author.findAll();
      if (authors.length > 0) {
        res
          .status(200)
          .json({ message: "Get All Author Success!", data: authors });
      } else {
        res.status(200).json({ message: "There's no Data!", data: [] });
      }
    } catch (e) {
      next(e);
    }
  },
  
  create: async (req, res, next) => {
    try {
      const { name, email, age, gender } = req.body;

      const body = req.body;
      const validate = v.validate(body, schema.author.createAuthor);

      if (validate.length) {
        return res.status(400).json(validate);
      }

      const created = await Author.create({
        name,
        email,
        age,
        gender,
      });

      return res.status(201).json({
        status: "CREATED",
        message: "New Author Created",
        data: created,
      });
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      let { name, email, age, gender } = req.body;

      const body = req.body;
      const validate = v.validate(body, schema.author.updateAuthor);

      if (validate.length) {
        return res.status(400).json(validate);
      }

      const author = await Author.findOne({ where: { id: id } });
      if (!author) {
        return res.status(404).json({
          status: "NOT_FOUND",
          message: `Author Didn't Exist`,
          data: null,
        });
      }

      if (!name) name = author.name;
      if (!email) email = author.email;
      if (!age) age = author.age;
      if (!gender) gender = author.gender;

      const updated = await Author.update(
        {
          name,
          email,
          age,
          gender,
        },
        {
          where: {
            id: id,
          },
        }
      );

      return res.status(200).json({
        status: "OK",
        message: "Update Author Success",
        data: updated,
      });
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      const author = await Author.findOne({
        where: {
          id: id,
        },
      });

      if (!author) {
        return res.status(404).json({
          status: "NOT_FOUND",
          message: `Author Didn't Exist`,
          data: null,
        });
      }

      const deleted = await Author.destroy({
        where: {
          id: id,
        },
      });

      return res.status(200).json({
        status: "OK",
        message: "Delete Author Success",
        data: deleted,
      });
    } catch (err) {
      next(err);
    }
  },
};
