const books = Vue.createApp({
    data() {
        return {
            showBooks: true,
            btitle: 'The Lyrics',
            bauthor: 'Paul McCartney', 
            year: 2021
        }
    },

    methods: {
        toggleShowBooks () {
            this.showBooks =  !this.showBooks
        }
    }
});
    
books.mount ('#books')