import { create } from "zustand";

interface MobileSideBarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMobileSideBar = create<MobileSideBarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useMobileSideBar