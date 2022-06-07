export const bears = (set, get) => ({
  bears: 0,
  addBear: () => set(state => ({ bears: state.bears + 1 })),
  removeBear: () => set(state => state.bears > 0 ? { bears: state.bears - 1 } : 0),
  removeAllBears: () => set({ bears: 0 })
})
