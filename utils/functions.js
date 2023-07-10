export function formatDate(date) {
  // Convierte la fecha a objeto Date si no lo es
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  // Obtiene los nombres de los meses en español
  var months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  // Obtiene el día, mes y año
  var day = date.getDate();
  var month = months[date.getMonth()];
  var year = date.getFullYear();

  // Retorna la fecha formateada
  return day + ' de ' + month + ', ' + year;
}
