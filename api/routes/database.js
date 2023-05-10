module.exports = app => {
    const controller = require('../controllers/database')();
  
    app.route('/armor') .get(controller.armor);
    app.route('/attributes') .get(controller.attributes);
    app.route('/classes') .get(controller.classes);
    app.route('/gods') .get(controller.gods);
    app.route('/magics') .get(controller.magics);
    app.route('/origins') .get(controller.origins);
    app.route('/powers') .get(controller.powers);
    app.route('/races') .get(controller.races);
    app.route('/skills') .get(controller.skills);
    app.route('/weapons') .get(controller.weapons);
    app.route('/char-export') .get(controller.charExport);
  }