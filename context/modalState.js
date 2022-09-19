
import create from "zustand";

const useModalState = create( (set) => ({
   modalState: { open:false, type:'nil'},
   toggle: (menuType, menuLink) => set((S) => ({ modalState: {open: !S.modalState.open, type: menuType, link: menuLink} })),

}))

export default useModalState;
