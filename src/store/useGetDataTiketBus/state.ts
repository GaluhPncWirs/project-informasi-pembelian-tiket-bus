import { getDatasTicketBus } from "@/lib/firebase/services";
import type { dataTicket } from "@/types/typeDataTicket";
import { create } from "zustand";

type GetDataTicketBus = {
  dataTicketBus: dataTicket[];
  handleGetDataTicketBus: () => void;
};

export const useGetDataTicketBus = create<GetDataTicketBus>((set) => ({
  dataTicketBus: [],

  handleGetDataTicketBus: async () => {
    const request = await getDatasTicketBus();
    if (request.status) {
      set({ dataTicketBus: request.data as dataTicket[] });
    } else {
      console.log(request.message);
    }
  },
}));
