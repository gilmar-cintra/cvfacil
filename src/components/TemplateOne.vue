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
      <div class="secondInfo">
        
        <more-info-block></more-info-block>
         <more-info-block></more-info-block>
          <more-info-block></more-info-block>
      </div>
    </page>
  </div>
</template>

<script>

export default {
  
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
        },
        moreInfo: [{field:"do sit",experiences:[{title:"et Lorem culpa",entity:"Sloganaut",startDate:"02/2014",endDate:"06/2019",description:"Consequat aliqua excepteur consectetur culpa incididunt duis amet duis magna esse exercitation non. Elit eu velit deserunt reprehenderit pariatur officia officia fugiat Lorem labore id et. Eiusmod ea culpa proident consectetur in. Mollit sunt ad labore nisi tempor enim aute deserunt ex ut aliquip nulla pariatur. Minim cupidatat id mollit quis dolor mollit enim voluptate sint. Cillum laboris mollit ad labore aliquip sint laboris veniam Lorem dolore incididunt.\r\n"},{title:"exercitation incididunt duis",entity:"Musaphics",startDate:"05/2018",endDate:"11/2019",description:"Consequat proident aliquip eiusmod non reprehenderit ut labore mollit Lorem laborum. Incididunt pariatur sit enim irure dolore officia ex et nostrud sint magna. Quis anim adipisicing mollit quis occaecat do.\r\n"},{title:"incididunt occaecat cupidatat",entity:"Tsunamia",startDate:"05/2018",endDate:"11/2018",description:"Amet ipsum eu proident minim ex officia. Ut ad sit nulla nostrud proident ipsum aliquip esse officia. Id proident labore elit exercitation. Proident in cillum occaecat nostrud consequat elit elit ad velit dolor.\r\n"}]},{field:"nostrud id",experiences:[{title:"reprehenderit ut id",entity:"Genesynk",startDate:"02/2021",endDate:"03/2018",description:"Ea minim fugiat dolor sint anim est veniam magna aliqua exercitation anim. Cillum tempor duis mollit consequat labore consequat eu. Ut aute sunt sunt nostrud officia occaecat aute mollit eu minim. Commodo cillum do sunt anim nisi minim tempor duis quis. Velit sint et anim consectetur qui commodo incididunt laborum.\r\n"},{title:"ea laborum cillum",entity:"Hotcakes",startDate:"04/2015",endDate:"10/2018",description:"In Lorem qui eu eiusmod sint. Tempor excepteur irure consectetur consequat proident culpa minim est nostrud sunt magna sunt minim. Laborum non aliquip mollit Lorem sunt exercitation nostrud ad adipisicing exercitation duis exercitation. Id cillum eiusmod excepteur aliqua est non.\r\n"},{title:"in anim sint",entity:"Accuprint",startDate:"04/2016",endDate:"03/2020",description:"Ut in sint veniam ad dolore qui id qui minim occaecat. Mollit pariatur in magna veniam et magna irure deserunt laborum. Anim sit ut enim labore sint. Cillum irure esse cillum sunt sint aliquip ipsum ex dolor amet. Labore qui eiusmod cillum elit. Pariatur culpa eiusmod id dolor sunt ex fugiat commodo irure officia cillum. Do enim reprehenderit duis consequat qui amet non eiusmod excepteur enim.\r\n"}]},{field:"Lorem ut",experiences:[{title:"velit ex in",entity:"Viagrand",startDate:"04/2016",endDate:"08/2017",description:"Laborum labore nostrud consectetur laboris sint id fugiat ut dolore ea ex aliqua labore ad. Sunt occaecat culpa sit fugiat proident commodo et. Dolore sint pariatur in qui mollit incididunt. Adipisicing ullamco nulla deserunt in eu nisi do elit commodo do. Tempor nulla ea reprehenderit anim nostrud et sunt ad.\r\n"},{title:"nostrud eiusmod dolor",entity:"Uncorp",startDate:"02/2015",endDate:"09/2019",description:"Anim officia deserunt qui reprehenderit. Sunt ut ea sunt et consequat magna exercitation Lorem. Amet ut eiusmod fugiat eiusmod fugiat.\r\n"},{title:"in sint deserunt",entity:"Futuris",startDate:"09/2018",endDate:"08/2020",description:"Aute mollit sint fugiat quis dolor tempor adipisicing tempor id. Enim reprehenderit fugiat nulla sit incididunt occaecat ut. Nostrud consectetur sunt Lorem aliqua veniam culpa ipsum est consequat duis. Aliqua excepteur culpa ut quis est incididunt nulla tempor occaecat veniam dolor magna fugiat labore. Non dolore consectetur adipisicing fugiat sunt ex.\r\n"}]}]
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
