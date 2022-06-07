export const tigers = (set, get) => ({
  tigers: 0,
  addTiger: () => set(state => ({ tigers: state.tigers + 1 })),
  removeTiger: () => set(state => state.tigers > 0 ? { tigers: state.tigers - 1 } : 0),
  removeAllTigers: () => set({ tigers: 0 })
})
