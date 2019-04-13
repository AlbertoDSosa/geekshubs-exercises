const mongoose = require('mongoose');
const _ = require('lodash');
 
const PageSchema = new mongoose.Schema({
    name: String
});

PageSchema.statics.busquedaWeb = (query) => {  
  // calcula paginacion
  let { 
    page = 1,
    limit = 10 
  } = query;

  limit = Number(limit);
  const skip = (page - 1) * limit;
  
  // se queda con los filtros de ordenamiento validos
  const filters = _.pickBy(_.pick(query, ['name']), (value) => {
    return (value === '1' || value === '-1')
  });
  
  // parametros de busqueda del usuario
  const busqueda = new RegExp(query.query);
  
  return Page
  .find({
    name: {$regex: busqueda}
  })
  .sort({
    ...filters
  })
  .skip(skip)
  .limit(limit);
}

const Page = mongoose.model('page', PageSchema);
 
module.exports = Page;
