<template>
  <div>
    <h1>List of Lung-too Tank</h1>
    <div v-for="tank in tanklist" :key="tank.tankname">
        <div>
            <img class="image-list" :src=tank.tankImg>
            <h3>{{tank.tankname}}</h3>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LisTank',

    data() {
        return {
            tanklist:[
            {
                tankname : 'M551 Sheridan' ,
                tankImg : 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Yuma_Proving_Ground%2C_Arizona_%2842188342504%29.jpg' ,
                description : 'The M551 "Sheridan" AR/AAV (Armored Reconnaissance/Airborne Assault Vehicle) was a light tank developed by the United States and named after General Philip Sheridan, of American Civil War fame. It was designed to be landed by parachute and to swim across rivers. It was armed with the technically advanced but troublesome M81/M81 Modified/M81E1 152mm gun/launcher, which fired both conventional ammunition and the MGM-51 Shillelagh guided anti-tank missile.'
            } ,

            {
                tankname : 'MGM-51 Shillelagh' ,
                tankImg : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/MGM-51.jpg/600px-MGM-51.jpg' ,
                description : 'The Ford MGM-51 Shillelagh (pronounced /ʃɪˈleɪli/ shil-AY-lee) was an American anti-tank guided missile designed to be launched from a conventional gun (cannon). It was originally intended to be the medium-range portion of a short, medium, and long-range system for armored fighting vehicles in the 1960s and 70s to defeat future armor without an excessively large gun. Developing a system that could fire both shells and missiles reliably proved complex and largely unworkable.' 
            } ,
            {
                tankname : 'T-80 MTB',
                tankImg : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/T-80_tank%2C_Engineering_Technologies_2010.jpg/600px-T-80_tank%2C_Engineering_Technologies_2010.jpg' ,
                description : 'The T-80 is a main battle tank (MBT) [11] designed and manufactured in the Soviet Union. When it entered service in 1976, it was the second MBT in the world to be equipped with a gas turbine engine after the Swedish Strv 103 and the first to use it as a primary propulsion engine. The T-80U was last produced in a factory in Omsk, Russia, while the T-80UD and further-developed T-84 continue to be produced in Ukraine. The T-80 and its variants are in service in Belarus, Cyprus, Egypt, Kazakhstan,[12] Pakistan, Russia, South Korea, and Ukraine. The chief designer of the T-80 was the Soviet engineer Nikolay Popov.[13]'
            }


            ],   
        }
    },

});
</script>
<style scoped>
.image-list {
  /* display: block; */
  width: 200px;
  height: 150px;
  margin: 1%;
}
</style>