// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GoogleSpreadsheet } from "google-spreadsheet";

// const SpreadsheetWriter = () => {
//   const dispatch = useDispatch();
//   const form = useSelector((state) => state.form);

//   useEffect(() => {
//     const writeUsersToSpreadsheet = async () => {
//       try {
//         // Crea una instancia de GoogleSpreadsheet y autentica
//         const doc = new GoogleSpreadsheet("ID de la hoja de cálculo");
//         await doc.useServiceAccountAuth({
//           client_email: process.env.GOOGLE_CLIENT_EMAIL,
//           private_key: process.env.GOOGLE_PRIVATE_KEY,
//         });

//         // Abre la hoja de cálculo y la pestaña de datos
//         await doc.loadInfo();
//         const sheet = doc.sheetsByIndex[0]; // elige la pestaña por su índice
//         await sheet.loadCells();

//         // Formatea los datos en una matriz de JavaScript
//         const rows = form;

//         // Escribe los datos en la hoja de cálculo
//         await sheet.addRows(rows);

//         console.log("Datos escritos en la hoja de cálculo");
//       } catch (error) {
//         console.error("Error al escribir datos en la hoja de cálculo:", error);
//       }
//     };

//     writeUsersToSpreadsheet();
//   }, [dispatch, form]);

//   return null;
// };

// export default SpreadsheetWriter;
