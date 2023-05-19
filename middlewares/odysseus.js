const messages = {
  poseidon: "Bad request: In the URL, replace 'id' by ':id'",
  cyclope: "Bad request. In the URL, replace ':id' by ':D'",
  nono: "Tu veux un petit clou ?",
  zeus: "Quiconque ose défier la puissance de Zeus doit être puni ! Tu erreras désormais dans un monde inconnu. Jusqu'au Royaume d'Hadès, vos corps resteront inertes ...",
};

/** Watch API activity and catch weird users */
const shyrka = (req, res, next) => {
  // is ":id" a valid string for a url segment or is it throwing?
  // console.log(req.params)
  // so many possibilities...

  const id = req.params["id"];
  // the demo only works for "id" but can easily be generalized
  if (!id) {
    next();
  }

  // Progressive and interactive learning
  let message = undefined;
  if (/^:/.test(id) || id === "id") {
    switch (id) {
      case "id":
        message = messages.poseidon;
        break;
      case ":id":
        message = messages.cyclope;
        break;
      case ":D":
      case ":d": // actually let's catch that emoji variant as well
        message = messages.nono;
        break;
      default:
        message = messages.zeus;
        break;
    }
    // Finally find some use for this code
    // And this incidently allows to easily catch funny people via already implemented analytics or logging system
    return res.status(418).json({ message });
  }

  // Let's go back to serious stuffs
  next();
};

module.exports = shyrka;
