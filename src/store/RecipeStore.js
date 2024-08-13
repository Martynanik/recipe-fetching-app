import {create} from "zustand";

const RecipeStore = create((set, get) => ({
    recipesObject: [],
    setRecipes: val => set({recipesObject: val}),
    page: 1,
    addPage: val => set({setPage: val}),
}))

export default RecipeStore