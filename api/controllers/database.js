module.exports = () => {
    const armorDB = require('../data/armor.json');
    const attributesDB = require('../data/attributes.json');
    const classesDB = require('../data/classes.json');
    const godsDB = require('../data/gods.json');
    const magicsDB = require('../data/magics.json');
    const originsDB = require('../data/origins.json');
    const powersDB = require('../data/powers.json');
    const racesDB = require('../data/races.json');
    const skillsDB = require('../data/skills.json');
    const weaponsDB = require('../data/weapons.json');
    const charExportDB = require('../data/char_export.json');

    const controller = {};
  
    controller.armor = (req, res) => res.status(200).json(armorDB);
    controller.attributes = (req, res) => res.status(200).json(attributesDB);
    controller.classes = (req, res) => res.status(200).json(classesDB);
    controller.gods = (req, res) => res.status(200).json(godsDB);
    controller.magics = (req, res) => res.status(200).json(magicsDB);
    controller.origins = (req, res) => res.status(200).json(originsDB);
    controller.powers = (req, res) => res.status(200).json(powersDB);
    controller.races = (req, res) => res.status(200).json(racesDB);
    controller.skills = (req, res) => res.status(200).json(skillsDB);
    controller.weapons = (req, res) => res.status(200).json(weaponsDB);
    controller.charExport = (req, res) => res.status(200).json(charExportDB);

    return controller;
  }