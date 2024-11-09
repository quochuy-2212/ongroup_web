// src/zustand/store.ts
import { create } from 'zustand';

interface SizeState {
    sizes: Record<string, { width: number; height: number }>;
    setSize: (key: string, size: { width: number; height: number }) => void;
    getSize: (key: string) => { width: number; height: number } | undefined; // Thêm hàm getSize để lấy kích thước
}

export const useSizeComponentStore = create<SizeState>((set, get) => ({
    sizes: {}, // Khởi tạo trạng thái mặc định
    setSize: (key, size) =>
        set((state) => ({
            sizes: {
                ...state.sizes,
                [key]: size, // Cập nhật kích thước của phần tử với key tương ứng
            },
        })),
    getSize: (key) => {
        const state = get();
        return state.sizes[key]; // Trả về kích thước của component theo key
    },
}));
