const createError = require("http-errors");
const { Role } = require("../models");

class RoleController {
  async getRoles(req, res, next) {
    try {
      const allRoles = await Role.find({}, { _id: 0 });
      if (allRoles) {
        console.log(`Result is: ${JSON.stringify(allRoles, null, 2)}`);
        res.status(200).json(allRoles);
      } else {
        next(createError(404, "Any roles has not been found"));
      }
    } catch (error) {
      next(error.message);
    }
  }

  async getRoleById(req, res, next) {
    try {
      const id = req.params.id;
      const roleById = await Role.findOne({ _id: id }, { _id: 0 });
      if (roleById) {
        console.log(`Result is: ${JSON.stringify(roleById, null, 2)}`);
        res.status(200).json(roleById);
      } else {
        console.log("Bad request");
        next(createError(404, "This role has not been found"));
      }
    } catch (error) {
      next(error.message);
    }
  }

  async createRole(req, res, next) {
    try {
      const body = req.body;
      const createdRole = await Role.create(body);
      if (createdRole) {
        console.log(`Result is: ${JSON.stringify(createdRole, null, 2)}`);
        res.status(200).json(createdRole);
      } else {
        console.log("Bad request");
        next(createError(400, "Bad request"));
      }
    } catch (error) {
      next(error.message);
    }
  }

  async updateRole(req, res, next) {
    try {
      const { body } = req;
      const updatedRole = await Role.updateOne({ _id: body._id }, body);
      if (updatedRole) {
        console.log(`Result is: ${JSON.stringify(updatedRole, null, 2)}`);
        res.status(200).json(updatedRole);
      } else {
        next(createError(404, "This role has not been found"));
      }
    } catch (error) {
      next(error.message);
    }
  }

  async changePartOfRole(req, res, next) {
    try {
      const {
        params: { id },
        body,
      } = req;
      const [updatedRolesCount, [updatedRole]] = await Role.updateOne(
        { _id: id },
        body
      );
      if (updatedRolesCount > 0) {
        console.log(updatedRole);
        res.status(200).json(updatedRole);
      } else {
        next(createError(404, "This role has not been found"));
      }
    } catch (error) {
      next(error.message);
    }
  }

  async deleteRole(req, res, next) {
    try {
      const id = req.params.id;
      const deletedRole = await Role.deleteOne({ _id: id });
      if (deletedRole) {
        res.send(res.statusCode);
      } else {
        next(createError(404, "This role has not been found"));
      }
    } catch (error) {
      next(error.message);
    }
  }
}

module.exports = new RoleController();
