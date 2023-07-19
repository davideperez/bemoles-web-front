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

export function formatDateTime(date) {
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

  // Obtiene la hora y los minutos
  var hours = String(date.getHours()).padStart(2, '0');
  var minutes = String(date.getMinutes()).padStart(2, '0');

  // Retorna la fecha formateada
  return day + ' de ' + month + ', ' + year + ' ' + hours + ':' + minutes;
}
