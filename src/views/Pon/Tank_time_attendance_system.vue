<template>
  <div>
    <h1>ระบบเพิ่มนายทหาร</h1>
    <img
      class="center"
      alt="soldier"
      src="./img01.png"
      width="200"
      height="200"
    />
    <br />
    <input type="file" accept="image/jpeg/*" @change="uploadImage()" />
    <br />
    <router-link class="button" to="/Tank_time_attendance_system"
      >เพิ่มรูป</router-link
    >
    <br /><label for="fname">First Name</label> <br /><input
      type="text"
      id="fname"
      name="firstname"
      placeholder="Your name.."
    />

    <br /><label for="lname">Last Name</label> <br /><input
      type="text"
      id="lname"
      name="lastname"
      placeholder="Your last name.."
    />

    <br /><router-link class="button" to="/Tank_time_attendance_system"
      >เพิ่มนายทหาร</router-link
    >
  </div>
</template>

<script language="Javascript">


export default {
  
  data: () => {
    return {
      img: "./img01.png",
    };
  },
};
</script>
<style>
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

input[type="text"],
select {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>