// const cron = require("node-cron");

// // Ejecutar la operación en el primer día de cada mes a las 12:00 a.m.
// cron.schedule("0 0 1 * *", async () => {
//   console.log("Cron job started.");

//   const currentDate = new Date();
//   if (currentDate.getDate() !== 1) {
//     console.log("Error: no es el primer día del mes.");
//     return;
//   }

//   // Continuar con la operación programada
//   const rentasUsuario = db.collection("rentasUsuario");
//   const monthlyReport = db.collection("monthlyReport");

//   // Calcular la fecha de finalización del mes anterior
//   const lastMonthEndDate = new Date(
//     currentDate.getFullYear(),
//     currentDate.getMonth(),
//     0
//   );
//   console.log("Last month end date: ", lastMonthEndDate);

//   const cursor = await rentasUsuario.aggregate([
//     {
//       $match: {
//         fechaFinalizacion: {$gte: new Date(lastMonthEndDate.toISOString())}
//       }
//     },
//     {
//       $group: {
//         _id: null,
//         totalPrice: {
//           $sum: "$price"
//         }
//       }
//     }
//   ]);

//   const result = await cursor.toArray();

//   console.log("Result: ", result);

//   const updateResult = await monthlyReport.updateOne(
//     {
//       _id: ObjectId("your_report_id")
//     },
//     {
//       $set: {
//         lastMonthTotalPrice: result[0].totalPrice
//       }
//     }
//   );

//   console.log(`Updated ${updateResult.modifiedCount} document.`);

//   const deleteResult = await rentasUsuario.deleteMany({
//     fechaFinalizacion: {$gte: new Date(lastMonthEndDate.toISOString())}
//   });

//   console.log(`Deleted ${deleteResult.deletedCount} documents.`);

//   console.log("Cron job completed.");
// });
