const Consola = require('../utils/database').models.consola;
const Videojuego = require('../utils/database').models.videojuego;
const vcDetail = require('../utils/database').models.consolaVideojuego;

async function isValidDetail(id, idConsola, idVidejuego, releaseYear) {
  try {

    if (id == null || id == undefined) {
      return false;
    }

    if (releaseYear == null || releaseYear == undefined) {
      return false;
    }
    const console = await Consola.findByPk(idConsola);
    const videojuego = await Videojuego.findByPk(idVidejuego);

    if (console == null || console == undefined) {
      return false;
    }
    if (videojuego == null || videojuego == undefined) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

// Creat Console
exports.Create = async (req, res) => {
  try {
    const { idCV, videojuegoId, consolaId, lanzamiento } = req.body;
    const detail = await vcDetail.findByPk(idCV);
    if (detail) {
      message = `Error creating the detail with idCV ${idCV} because it already exists`;
      console.log(message);
      res.status(422).send({
        message: message
      });
    } else {
      const isValid = await isValidDetail(idCV, consolaId, videojuegoId, lanzamiento);
      if (isValid) {
        console.log("Valid entity", idCV, consolaId, videojuegoId, lanzamiento);
        detailPojo = {
          idCV: idCV,
          videojuegoId: videojuegoId,
          consolaId: consolaId,
          lanzamiento: lanzamiento
        }
        const vc = await vcDetail.create(detailPojo);
        if (vc != null && vc != undefined) {
          res.send({
            message: "Success",
            entity: vc
          });
        } else {
          res.send({
            message: "Consola was updated successfully."
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Error creating the detail for VideogameConsoleDetail"
    });
  }
};

// Read Many
exports.Get = (req, res) => {
  vcDetail.findAll()
    .then(vc => {
      console.log(vc);
      res.json(vc);
    })
    .catch(err => {
      console.log("Error" + err);
      res.json({ error: err });
    });

}

// Read Console
exports.GetOne = (req, res) => {
  const { id } = req.params;
  if (id == null || id == undefined) {
    const errorMessage = "Error: ID is undefined or null";
    console.log(errorMessage);
    res.json({ error: errorMessage });
  } else {
    vcDetail.findByPk(id)
      .then(vc => {
        console.log(vc);
        res.json(vc);
      })
      .catch(err => {
        console.log("Error" + err);
        res.json({ error: err });
      });
  }
}


// Update Console
exports.Update = async (req, res) => {
  const { id } = req.params;
  const detail = await vcDetail.findByPk(id);
  if (!detail) {
    message = `Error updating the detail with id ${id} because it doesn't exists`;
    console.log(message);
    res.status(422).send({
      message: message
    });
  } else {
    const { videojuegoId, consolaId, lanzamiento } = req.body;
    const isValid = await isValidDetail(idCV, consolaId, videojuegoId, lanzamiento);
    if (isValid) {
      vcDetail.update({
        lanzamiento: lanzamiento,
        videojuegoId: videojuegoId,
        consolaId: consolaId
      }, {
        where: { idCV: id }
      })
        .then(detail => {
          if (detail == 1) {
            res.send({
              message: "VideogameConsoleDetail was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update VideogameConsoleDetail with id=${id}. Maybe VideogameConsoleDetail was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          console.log(err);
          res.status(500).send({
            message: "Error updating VideogameConsoleDetail with id = " + id
          });
        });
    } else {
      message = `Error updating the detail with id ${id} because it doesn't exists`;
      console.log(message);
      res.status(422).send({
        message: message
      });
    }
  }
};

// Destroy Console
exports.Delete = (req, res) => {
  const { id } = req.params;

  vcDetail.destroy({
    where: { idCV: id }
  })
    .then(detail => {
      if (detail == 1) {
        res.send({
          message: "VideogameConsoleDetail was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete VideogameConsoleDetail with id=${id}. Maybe VideogameConsoleDetail was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete VideogameConsoleDetail with id=" + id
      });
    });
};
