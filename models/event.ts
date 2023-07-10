export type Event = {
  _id: string;
  title: string;
  date: Date | string;
  image: string;
  info: string;
  price: number;
  maxAttendance: number;
  paymentLink: string;
  reserves: Reserve[];
  active: boolean;
};

export type Reserve = {
  firstName: String;
  lastName: String;
  dni: String;
  ticketQuantity: Number;
  email: String;
  event: Event | string;
  createdAt: Date;
};
