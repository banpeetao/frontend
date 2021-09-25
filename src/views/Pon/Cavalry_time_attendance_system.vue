<template>
  <div>
    <h1>ระบบลงเวลาเหล่าทหารม้า</h1>
    <router-link class="button" to="/Tank_time_attendance_system">เพิ่มนายทหาร</router-link>

    <table class="table">
      <tr>
        <th>Avata</th>
        <th>Name</th>
        <th>Setting</th>
      </tr>
      <tr v-for="item in res" :key="item.name">
        <td>
          <img
            
            alt="soldier"
            src="./img01.png"
            width="200"
            height="200"
            margin= "auto"
          />
        </td>
        <td>{{ item.name }}<br/>{{item.info}}</td>

        <td>
          <router-link class="button" to="/Tank_time_attendance_system">ลงเวลารถถัง</router-link>
          <br/>
          <router-link class="button" to="/Tank_time_attendance_system">ลงเวลารถถัง</router-link>
          </td>


      </tr>
    </table>
  </div>
</template>

<style>


table {
  margin: auto;
    border-collapse: collapse;
    width: 80%;
}
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.center {
  margin: auto;
  width: 60%;

  padding: 10px;
}
</style>


<script language="Javascript">
export default {
  data: () => {
    return {
      res: [{name:"ร้อยเอก ธรรมนัด",info:"ผู้บังคับการรถถัง TC508 "},{ name:"ผู้พัน หมู",info:"ผู้บันชาการ กองพันทหารม้าที่ 5 ผู้บังคับการรถถัง TC508"}],
    };
  },
};
</script>