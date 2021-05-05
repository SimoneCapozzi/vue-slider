const app = new Vue ({

  el:'#app',

  data:{

    counterImmagini:0,

    immagini:[
      'img/img-1.png',
      'img/img-2.jpg',
      'img/img-3.jpg',
      'img/img-4.jpg'
    ]


  },

  methods:{

    prossimaFoto(){
      this.counterImmagini++;

      if(this.counterImmagini === this.immagini.length) this.counterImmagini = 0;
    },


    fotoPrecedente(){
      this.counterImmagini--;

      if(this.counterImmagini < 0) this.counterImmagini = this.immagini.length - 1;
    }



  }







})