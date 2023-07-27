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
  published: boolean;
  createdAt: Date;
};

export type Reserve = {
  firstName: string;
  lastName: string;
  dni: string;
  ticketQuantity: number;
  email: string;
  event: Event | string;
  createdAt: Date;
};
