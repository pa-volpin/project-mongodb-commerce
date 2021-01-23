db.commerce.updateMany({ valorUnitario: { $exists: 0 } }, { $set: { valorUnitario: NumberDecimal(0.00) } });
db.commerce.find({}, { _id: 0, nome: 1, valorUnitario: 1 });
