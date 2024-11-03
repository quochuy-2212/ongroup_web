import { create } from 'zustand';

interface IMenuState {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const useMenuStore = create<IMenuState>((set) => ({
    isMenuOpen: false,
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useMenuStore;
