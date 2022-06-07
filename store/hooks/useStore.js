import create from 'zustand'
import { bears } from '../bears'
import { tigers } from '../tigers'


const appStore = (set, get) => ({
  ...bears(set, get),
  ...tigers(set, get)
})

export const useStore = create(appStore)

