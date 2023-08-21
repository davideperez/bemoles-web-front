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
  _id: string;
  firstName: string;
  lastName: string;
  dni: string;
  ticketQuantity: number;
  email: string;
  event: Event | string;
  createdAt: Date;
  paymentStatus: string;
  payments: [
    {
      paymentId: string;
    }
  ];
};

export type PaymentDetail = {
  _id: string;
  status: string;
  total_amount: number;
  net_received_amount: number;
  client_email: string;
  client_phone: {
    area_code: number;
    number: number;
    extension: number;
  };
  currency_id: string;
  date_approved: string;
  date_created: string;
  date_last_updated: string;
};
