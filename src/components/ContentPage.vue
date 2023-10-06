<template>
    <div class="container_body" >
        <div class="content_page">
            <div class="content-1 p-4 mt-7">
                <div class="profile_icon"><p>A</p></div>
                <div style="font-weight: 900;">
                    <p style="margin-bottom: 25px;">Name - </p>
                    <p>E-Mail - </p>
                </div>
                <div>
                    <p style="margin-bottom: 25px;">Akash.c</p>
                    <p>akashsaka03@gmail.com</p>
                </div>
                <div style="font-weight: 900;">
                    <p style="margin-bottom: 25px;">Phone No : </p>
                    <p>Designation : </p>
                </div>
                <div>
                    <p style="margin-bottom: 25px;">7448792885</p>
                    <p>Software Developer</p>
                </div>
                
                
            </div>
            <div class="content-2">
                <div class="leave-btn">
                    <BaseButtonPage></BaseButtonPage>
                </div>
                
            </div>
        </div>
        <div>
            <div class="col2-content-3"> 
            </div>
        </div>
    </div>
    
    
</template>
<script>
import BaseButtonPage from './BaseButtonPage.vue';
export default {
  name: 'ContentPage',
  props: {
    msg: String,
  },
  components:{
     BaseButtonPage,
  },
};
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.container_body{
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;
}
.content_page{
    display: flex;
    flex-direction: column;
    
}
.content-1{
    display: grid;
    grid-template-columns: 80px 60px 1fr 120px 1fr ;
    column-gap: 20px;
    margin-top: 100px;
    border: 1px solid gray;
    border-radius: 15px;
    font-size: 15px;
    box-shadow: 0 5px 15px 0 rgba(77, 158, 204, 0.5);
    height: 130px;
    margin-bottom: 20px;
}
.content-2{
    border: 1px solid gray;
    border-radius: 15px;
    box-shadow: 0 5px 15px 0 rgba(77, 158, 204, 0.5);
    height: 370px;
}
.col2-content-3{
    width: 390px;
    padding: 10px;
    margin-top: 100px;
    border: 1px solid gray;
    border-radius: 15px;
    box-shadow: 0 5px 15px 0 rgba(77, 158, 204, 0.5);
    height: 520px;
    
}
.profile_icon{
    background-color: rgb(72, 166, 197);
    width: 75px;
    height: 75px;
    border-radius: 100px;
    text-align:center;
    color: antiquewhite;
    letter-spacing: 1px;
    padding-top: 19px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
    font-size: 25px;
    font-weight: 700;
    margin-right: 0px;
}
.leave-btn{
    
}
</style>