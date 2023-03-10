import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      recipes: [
        {
          id: 1,
          recipeImage: "https://i.ibb.co/SBsMYNC/Rendang.jpg",
          recipeTitle: "Rendang",
          likes: 100,
          body: "Rendang Recipe",
        },
        {
          id: 2,
          recipeImage: "https://i.ibb.co/MRNhgzW/Tomyam.jpg",
          recipeTitle: "Tomyam",
          likes: 40,
          body: "Tomyam Recipe",
        },
        {
          id: 3,
          recipeImage: "https://i.ibb.co/CW4tVvp/Spaghetti-aglioo-o-lio.jpg",
          recipeTitle: "Spagethi Aglio Olio",
          likes: 200,
          body: "Spagethi Aglio Olio Recipe",
        },
        {
          id: 4,
          recipeImage: "https://i.ibb.co/z7zRVxV/Spaghetti-Carbonara.jpg",
          recipeTitle: "Spagethi Carbonara",
          likes: 200,
          body: "Spagethi Carbonara Recipe",
        },
        {
          id: 5,
          recipeImage: "https://i.ibb.co/Cn1XPNB/Kimchi.jpg",
          recipeTitle: "Kimchi",
          likes: 10,
          body: "Kimchi Recipe",
        },
      ],
    },
    getters: {
      recipeData(state) {
        return state.recipes;
      },
    },
    computed: {
      recipes() {
        return this.$store.getters.recipeData;
      },
    },
  });
};

export default createStore;
