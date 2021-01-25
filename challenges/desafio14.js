db.produtos.updateMany(
  {},
  { $push: { tags: "contém sódio" } },
  { arrayFilters: [{
    $and: [
      { "valororesNutricionais.$[elemento].tipo": "sódio" },
      { $and: [
        { "valororesNutricionais.$[elemento].percentual": { $gt: 20 } },
        { "valororesNutricionais.$[elemento].percentual": { $lt: 40 } },
      ] },
    ],
  }] },
);

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
