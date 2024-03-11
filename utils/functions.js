import { PAYMENT_STATUS } from "../models/enums/paymentStatus";

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

export const scaleCloudinaryImageFromUrl = (url, width) => url?.replace('/upload/', `/upload/c_fit,w_${width}/`);

export const getPaymentStatusText = (status) => {
  switch (status) {
    case PAYMENT_STATUS.FAILURE:
      return {
        text: "Fallido",
        color: "red",
      };
    case PAYMENT_STATUS.PENDING:
      return {
        text: "Pendiente de confirmación",
        color: "gray",
      };
    case PAYMENT_STATUS.SUCCESS:
      return { text: "Confirmado", color: "green" };
    default:
      return { text: "No realizado", color: "purple" };
  }
};

export const isExpiratedReserve = (reserveCreationDate) => {
  const currentDate = new Date();
  const reserveDateOfCreation = new Date(reserveCreationDate);
  const featureInitialDate = new Date(process.env.NEXT_PUBLIC_INITIAL_DATE_PAYMENT_GATEWAY_FEATURE)
  if (featureInitialDate > reserveDateOfCreation) return false;

  const elapsedTime = currentDate - reserveDateOfCreation;

  const expirationHours = process.env.NEXT_PUBLIC_EXPIRATION_HOURS;
  const expirationHoursInMilliseconds = Number(expirationHours) * 60 * 60 * 1000;

  return elapsedTime >= expirationHoursInMilliseconds;
};

export const getReserveQuantity = (reserves) =>
  reserves.reduce((reserveQuantity, reserve) => {
    const isValidatedReserve =
      !isExpiratedReserve(reserve.createdAt) ||
      [PAYMENT_STATUS.PENDING, PAYMENT_STATUS.SUCCESS].includes(
        reserve.paymentStatus
      );
    const reserveQuantityToUpdate =
      reserveQuantity + (isValidatedReserve ? reserve.ticketQuantity : 0);
    return reserveQuantityToUpdate;
  }, 0);

export const formatUTCToTimezone = (date) => {
  const newDate = new Date(date);
  const offset = newDate.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(newDate.getTime() - offset);
  const adjustedISOString = adjustedDate.toISOString().substring(0, 16);
  return adjustedISOString;
};

export const lineBreaksToBrs = (text/*:  string | undefined */) => {
  const textWithLineBreaks = text?.replace(/\n/g, "<br/>")
  return textWithLineBreaks
}


export const brsToLineBreaks = (text) => {
  const textWithLineBreaks = text?.replace(/<br\/>/g, "\n")
  return textWithLineBreaks;
}
