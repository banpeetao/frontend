<style>
  body {
  background-color: #c8edfa;
  }

  input[type=tname], select {
    width: 10%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=info], select {
    width: 30%;
    padding: 100px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 10%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  
  input[type=addtank] {
    width: 10%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
      top: -15;
      right: 0;
  }

  div {
    border-radius: 5px;
    padding: 10px;
  }
</style>

<template>
  <body>
    <div class="about">
      <h1>This is Non</h1>
      <input type="addtank" value="เพิ่มรถถัง">

      <center>
        <img src="https://icon-library.com/images/upload-photo-icon/upload-photo-icon-23.jpg" alt="Folder Upload Icon - Free Icons" id="cpimg">
      </center>

      <div>
        <form action="/action_page.php">
          <label for="tname"> </label>
          <input type="tname" id="tname" name="tankname" placeholder="ชื่อรถถัง">

          <div>
            <label for="info"> </label>
            <input type="info" id="info" name="infotext" placeholder="ข้อมูลรถถัง">
          </div>

          <input type="submit" value="ยืนยัน">
          <input type="submit" value="ยกเลิก">
        </form>
      </div>

    </div>
  </body>
</template>