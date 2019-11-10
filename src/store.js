import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [
            {
                images: [
                    { url: 'druck-1.jpg', caption: 'Druck 1' },
                    { url: 'druck-2.jpg', caption: 'Druck 2' },
                    { url: 'druck-3.jpg', caption: 'Druck 3' },
                    { url: 'druck-4.jpg', caption: 'Druck 4' },
                    { url: 'druck-5.jpg', caption: 'Druck 5  kgjhb lzgfjthr ztdj tzfj fjhfhgdjzd uzkgjhfg tfghrdfkuz tfhtdfj utzfjfjht tfjrdjf uzft ktzf jtzf tzfztfjtf tzfzktfh tfzt' }
                ]
            },
            { video: 'Niedriges_Niveau_Small.mp4', poster: 'Niedriges_Niveau_Small.jpg' },
            {
                image: {
                    url: 'druck-obj.jpg',
                    caption: 'Lorem ipsum'
                }
            },
            {
                image: {
                    url: 'ar-brille.gif',
                    caption: 'Lorem ipsum'
                }
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getImage: state => index => {
            if (state.data[index].hasOwnProperty('image')) {
                return {
                    ...state.data[index].image,
                    type: 'image'
                }
            }
            if (state.data[index].hasOwnProperty('images') && state.data[index].images.length > 0) {
                return {
                    url: state.data[index].images[0].url,
                    slides: state.data[index].images,
                    type: 'slides'
                }
            }
            if (state.data[index].hasOwnProperty('video') && state.data[index].hasOwnProperty('poster')) {
                return {
                    url: state.data[index].poster,
                    video: state.data[index].video,
                    type: 'video'
                }
            }
        }
    }
})
