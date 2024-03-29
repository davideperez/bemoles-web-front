import { Event } from "../../../models/event";
import { ApiBase } from "../../../models/apiBase";


export interface EventTableProps {
    events?: ApiBase<Event>;
    handleLinkDetailEvent: (id: string) => void;
    updateActive: (id: string, type: string, value: boolean) => void;
    handleDeleteEvent: (event: Event) => void;
    isWorkshop?: boolean;
}