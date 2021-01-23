db.commerce.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
db.commerce.find({}, { _id: 0, nome: 1, criadoPor: 1 });
