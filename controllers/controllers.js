const Middleware = require("../middleware/rules");

exports.checkHealth = (req, res) => {
  res.render("health");
};

exports.page_1 = (req, res) => {
  res.render("page_1", {
    nama: "Sayyida Amira Muthia Dina",
  });
};


exports.biodata = (req, res) => {
  const data = {
    nama: "Sayyida Amira Muthia Dina",
    alamat: "Demak"
  };
  res.render("Biodata", data);
};

exports.query = (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));

  const middleware = new Middleware(req.headers.key);
  middleware.validateKey();
  console.log(middleware.errors, new Date());

  if (middleware.errors.length) {
    res
      .status(400)
      .send(`Tidak Berjalan ${middleware.errors.toString()}`);
  } else {
    res.status(200).send(`Berjalan ${req.headers.key}`);
  }
};
