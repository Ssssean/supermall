<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index" 
         @click="itemclick(index)"
        class="tab-control-item"
        :class="{active:index === currendIndex}">
            <span >{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return{
            currendIndex:0
        }
    },
    methods:{
        itemclick(index){
            console.log(index);
            this.currendIndex= index;
            this.$emit('tabclick',index);
        }
    }
    
}
</script>
<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height:40px;
        line-height:40px; 
        background-color: #fff; 
    }

    .tab-control-item{
        flex:1;
        height:40px;
        line-height:40px;
    }

    .tab-control-item span{
        padding:5px;
    }

    .active{
        color:pink ;
    }

    .active span{
        border-bottom:3px solid pink; 
    }
</style>


