// // Obtener la colección "rentasUsuario"
// const rentasUsuario = db.collection("rentasUsuario");

// // Crear el trigger que se ejecutará cuando se inserte un documento en la colección
// rentasUsuario.watch([{ $match: { operationType: "insert" } }]).on("change", (event) => {
//   console.log(`Se agregó un nuevo documento a la colección rentasUsuario: ${JSON.stringify(event.fullDocument)}`);
// });
