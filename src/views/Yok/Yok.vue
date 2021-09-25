<template>
  <div class="about">
    <h1>รถถังของลุง</h1>
    <div class="row">
    <div class="relative">
     <div class="col-3">
      <img :src="tank1" height="200" width="200" fluid alt="Fluid image" />
      </div>

      
      <div class="col-5">
         <h2> รถถัง รุ่น 1</h2> 
         <ul>
         <li>น้ำหนัก : 1000 ตัน</li>
         <li>จุกระสุน : 5 ลูก</li>
         <li>ระยะยิง  : 100 เมตร</li>
         <li>บรรทุก  : 3 คน</li>
         </ul>
      </div>
    </div>
    
    <div class="relative">
      <div class="col-3">
      <img :src="tank2" height="200" width="200" fluid alt="Fluid image" />
      </div>
      
      <div class="col-5">
         <h2> รถถัง รุ่น 2</h2> 
         <ul>
         <li>น้ำหนัก : 2000 ตัน</li>
         <li>จุกระสุน : 5 ลูก</li>
         <li>ระยะยิง  : 500 เมตร</li>
         <li>บรรทุก  : 2 คน</li>
         </ul>
      </div>
    </div>
    
    <div class="relative">
      <div class="col-3">
      <img :src="tank3" height="200" width="200" fluid alt="Fluid image" />
      </div>
      
      <div class="col-5">
         <h2> รถถัง รุ่น 3</h2> 
         <ul>
         <li>น้ำหนัก : 3000 ตัน</li>
         <li>จุกระสุน : 10 ลูก</li>
         <li>ระยะยิง  : 1,000 เมตร</li>
         <li>บรรทุก  : 10 คน</li>
         </ul>
      </div>
    </div>

    <div class="relative">
      <div class="col-3">
      <img :src="tank4" height="200" width="200" fluid alt="Fluid image" />
      </div>
      
      <div class="col-5">
         <h2> รถถัง รุ่น 4</h2> 
         <ul>
         <li>น้ำหนัก : 10 ตัน</li>
         <li>จุกระสุน : 0 ลูก</li>
         <li>ระยะยิง  : 1 M เมตร</li>
         <li>บรรทุก  : 1 คน</li>
         </ul>
      </div>
    </div>

    </div>
    
  </div>

</template>

<style>

body {
  background-color: linen;
}

h1 {
  color: darkslategrey;
  text-align:center;
  font-size: 80px;
}

h2 {
  color: rgb(36, 51, 51);
  text-align:left;
  font-size: 40px;
}

h3 {
  color: rgb(36, 51, 51);
  text-align:left;
  font-size: 30px;
}

image {
  position: left;

}
.header {
  border: 1px solid rgb(34, 46, 31);
  padding: 15px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;

}

.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

</style>

<script>
import tank1 from "../../assets/tank1.jpg";
import tank2 from "../../assets/tank2.jpg";
import tank3 from "../../assets/tank3.jpg";
import tank4 from "../../assets/tank4.jpg";




export default {
    data: function () {
        return {
            tank1: tank1,
            tank2: tank2,
            tank3: tank3,
            tank4: tank4
        }
    }  
}

</script>

<style>
div.relative {
  position: relative;
  width: 800px;
  height: 250px;
  border: 3px solid #262e1b;
} 

div.right {
  position: absolute;
  top: 80px;
  right: 40px;
  width: 200px;
  height: 200px;
}

div.mid {
  position: absolute;
  top: 80px;
  left: 400px;
  width: 200px;
  height: 200px;
}

div.left {
  position: absolute;
  top: 80px;
  left: 40px;
  width: 200px;
  height: 200px;
}
</style>

