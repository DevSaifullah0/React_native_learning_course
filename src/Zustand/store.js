import { create } from "zustand";

export const useCounterStore = create((set)=>({
    count:1,
    Increment:()=> set((state)=>({count: state.count+1})),
    Decrement:()=> set((state)=>({count: state.count-1})),
}));