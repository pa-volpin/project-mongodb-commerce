db.produtos.updateMany({}, { $push: { vendasPorDia:
  { $each: [NumberInt(0), NumberInt(0), NumberInt(0), NumberInt(0),
    NumberInt(0), NumberInt(0), NumberInt(0)] } } }, { $upsert: true });
db.produtos.updateOne({ nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": NumberInt(60) } });
db.produtos.updateOne({ $and: [{ tags: "bovino" }, { tags: "pão" }] },
  { $inc: { "vendasPorDia.6": NumberInt(120) } });
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });
