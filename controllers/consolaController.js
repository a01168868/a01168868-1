const Consola = require('../utils/database').models.consola;

// Creat Console
exports.Create = (req, res) => {
    const { id, nombre } = req.body;

    Consola.create({ id, nombre })
        .then(resultado => {
            console.log("Nueva Consola", resultado);
            res.json({ estado: "Aceptado", entity: resultado });
        })
        .catch(err => {
            console.log("Error",err);
            res.json({ estado: "Error" });
        })
};

// Read Many
exports.Get = (req, res) => {

    Consola.findAll()
        .then(consola => {
            console.log(consola);
            res.json(consola);
        })
        .catch(err => {
            console.log("Error",err);
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
        Consola.findByPk(id)
            .then(consola => {
                console.log(consola);
                res.json(consola);
            })
            .catch(err => {
                console.log("Error",err);
                res.json({ error: err });
            });
    }
}


// Update Console
exports.Update = (req, res) => {
    const { id } = req.params;
  
    Consola.update(req.body, {
      where: { id: id }
    })
      .then(consres => {
        if (consres == 1) {
          res.send({
            message: "Consola was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Consola with id=${id}. Maybe Consola was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        console.log("Error",err);
        res.status(500).send({
          message: "Error updating Consola with id=" + id
        });
      });
};

// Destroy Console
exports.Delete = (req, res) => {
    const { id } = req.params;
  
    Consola.destroy({
      where: { id: id }
    })
      .then(consres => {
        if (consres == 1) {
          res.send({
            message: "Consola was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Consola with id=${id}. Maybe Consola was not found!`
          });
        }
      })
      .catch(err => {
        console.log("Error",err);
        res.status(500).send({
          message: "Could not delete Consola with id=" + id
        });
      });
  };
  