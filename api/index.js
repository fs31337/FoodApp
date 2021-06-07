//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Diet_type} = require('./src/db.js')


// Syncing all the models at once.
conn.sync({ force: true })
.then(() => {
  server.listen(3001, () => {
    var GlutenFree = Diet_type.create({
      name: "Gluten Free"
    });
    var Ketogenic = Diet_type.create({
      name: "Ketogenic"
    });
    var Vegetarian = Diet_type.create({
      name: "Vegetarian"
    });
    var Lacto_Vegetarian = Diet_type.create({
      name: "Lacto-Vegetarian"
    });
    var Ovo_Vegetarian = Diet_type.create({
      name: "Ovo-Vegetarian"
    });
    var Vegan = Diet_type.create({
      name: "Vegan"
    });
    var Pescetarian = Diet_type.create({
      name: "Pescetarian"
    });
    var Paleo = Diet_type.create({
      name: "Paleo"
    });
    var Primal = Diet_type.create({
      name: "Primal"
    });
    var Whole30 = Diet_type.create({
      name: "Whole30"
    });
    Promise.all([GlutenFree,Ketogenic,Vegetarian,Lacto_Vegetarian,Ovo_Vegetarian,Vegan,Pescetarian,Paleo,Primal,Whole30])
      .then(res =>{
        console.log("Precarga de types exitosa!!")
      });
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
