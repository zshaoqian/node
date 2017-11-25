Vue.component("custom-btn", {
    props: {
        name: {
            type: String,
            default: "abcd"
        }
    },
    data(){
        return {
            myname: this.name
        }
    },
    template: "<div class='custom-btn' @click='change()'>{{this.myname}}</div>",

    methods: {
        change(){
            this.myname = "上传";
        }
    }
});

Vue.component("custom-search", {
    props:{
        listData:{
            default:function(){
                return [];
            }
        }
    },
    data(){
      return {
          val:""
      }
    },
    template: `
        <div class="custom-search">
             <input type="text" v-model="val">
             <list :listData="listData" @aa="bb"></list>
        </div>
        
        `,
    methods:{
        bb(val){
            this.val=val;
        }
    }
});

Vue.component("list",{
    props:{
        listData:{
            default:[]
        }
    },
    template:`<ul>
             <li v-for="item in listData" @click="click(item)">{{item}}</li>
        </ul>`,

    methods:{
        click(val){
            //"触发事件"
            this.$emit("aa",val);
        }
    }
})


Vue.component("custom-menu",{
    props:["menuData"],
    template:`
        <div class="custom-menu">
            <son :menu-data="menuData"></son>
        </div>
`
})

Vue.component("son",{
    props:["menuData"],
    template:`<ul>
                     <li v-for="item in menuData" @click.stop="show(item)">
                         {{item.title}}
                         <son v-if="item.child" v-show="item.flag" :menu-data="item.child"></son>
                     </li>
                  
            </ul>`,
    methods:{
        show(item){
            item.flag=!item.flag;
        }
    }
})

















