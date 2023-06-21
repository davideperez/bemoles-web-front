export type Event = {
    _id: string;
    title: string;
    date: Date | string;
    image: string;
    info: string;
    price: number;
    maxAttendance: number;
    paymentLink: string;
}