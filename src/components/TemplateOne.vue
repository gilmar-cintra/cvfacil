<template>
  <div>
    <page size="A4">
      <br />
      <div class="firstInfo">
        <div class="blueDetail"></div>

        <div class="photoPlace">
          <img :src="photoLink" alt="" class="avatar" />
        </div>

        <div class="name">
          {{ firstName }}<br />
          {{ lastName }}
        </div>

        <div class="jobTitle">
          {{ jobTitle }}
        </div>

        <info-block title="Objetivo" :text="about"></info-block>
        <info-block title="Contato" :contact="contact"></info-block>
        <info-block title="Habilidades" :skills="skills"></info-block>
         <info-block title="Idiomas" :languages="laguages"></info-block>

      
       


      </div>
      <div class="secondInfo"></div>
    </page>
  </div>
</template>

<script>
import InfoBlock from "./InfoBlock.vue";
export default {
  components: { InfoBlock },
  data() {
    return {
      firstName: "Marcio",
      lastName: "Silva",
      photoLink: "https://www.w3schools.com/howto/img_avatar.png",
      jobTitle: "Desenvolvedor",
      about:
        "Busco oportunidades de desenvolver-me profissionalmente e fazer a diferença na equipe.",
        contact: {
          address: "Rua Gregório Pomar, 213 E Viela Sabiá n.º 19 Jardim Damasceno - São Paulo / SP - CEP 02879-050",
          phones: [
            "+55 11 91234-1234",
            "+55 11 98765-4321"
          ],
          emails:[
            "r.sale.rodrigues@gmail.com",
            "marcio.farias@hotmail.com"
          ]
        },
        teste: {
          "Gilmar": 2,
          "Cintra": 3
        },
        skills: {
            "HTML & CSS": 3,
            "MySQL & SQL": 2,
            "PHP & Laravel": 3,
            "JQuery & TypeScript":5,
            "Microsoft Office": 4
        },
        laguages: {
          "Português": 3,
          "English": 4,
          "Espanhol": 2
        }
    };
  },
};
</script>

<style>
body {
  background: rgb(204, 204, 204);
}

.firstInfo {
  width: 6.9cm;
  margin-left: 0.5cm;
  height: 28.7cm;
  background-color: #ededee;
  float: left;
  border-radius: 20px;
}

.secondInfo {
  width: 12.7cm;
  margin-left: 0.4cm;
  height: 28.7cm;
  background-color: #ededee;
  float: left;
  border-radius: 20px;
}

.blueDetail {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6.9cm 6.3cm 0 0;
  border-color: #0085c7 transparent transparent transparent;
  position: absolute;
}

.avatar {
  border-radius: 50%;
  width: 230px;
  height: 230px;
  position: relative;

  margin-top: 0.8cm;
}

.photoPlace {
  width: 100%;
  text-align: center;
}

.name {
  font-size: 45.64pt;
  color: #0085c7;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-family: "Bebas", Helvetica, Arial;
  padding-top: 15px;
  letter-spacing: 13px;
}

.jobTitle {
  font-family: "MyriadPro", Helvetica, Arial;
  font-size: 12pt;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #414142;
  margin-top: 10px;
}

page {
  background: #f1f1f2;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
}
page[size="A4"] {
  width: 21cm;
  height: 29.7cm;
}

@media print {
  body,
  page {
    margin: 0;
    box-shadow: 0;
  }
}
</style>
