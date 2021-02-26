<template>
  <div class="allContent">
    <span class="field">{{ field }}</span>
    <hr />

    <table border="0">
      <div v-for="experience in experiences" :key="experience.title">
        <tr>
          <td>
            <div style="width:140px;">
              <span class="title">
                {{ experience.title }}
              </span>
              <br/>
              <span class="period">
                {{ experience.startDate }} - {{ experience.endDate }}
              </span>
            </div>
             
          </td>
          <td>
            <span class="title">
              {{ experience.entity }}
            </span>
           <br/>
            <span class="text">
              {{ experience.description }}
            </span>
             <br/><br/>
          </td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
    
  data() {
    return {
      field: "Experiencias Profissionais",
      experiences: [
        {
          title: "velit ex in",
          entity: "Viagrand",
          startDate: "04/2016",
          endDate: "08/2017",
          description:
            "Anim officia deserunt qui reprehenderit. Sunt ut ea sunt et consequat magna exercitation Lorem. Amet ut eiusmod fugiat eiusmod fugiat.",
        },
        {
          title: "nostrud eiusmod dolor",
          entity: "Uncorp",
          startDate: "02/2015",
          endDate: "09/2019",
          description:
            "Anim officia deserunt qui reprehenderit. Sunt ut ea sunt et consequat magna exercitation Lorem. Amet ut eiusmod fugiat eiusmod fugiat.",
        },
        {
          title: "in sint deserunt",
          entity: "Futuris",
          startDate: "09/2018",
          endDate: "08/2020",
          description:
            "Anim officia deserunt qui reprehenderit. Sunt ut ea sunt et consequat magna exercitation Lorem. Amet ut eiusmod fugiat eiusmod fugiat.",
        },
      ],
    };
  },
};
</script>

<style>
.left {
  float: left;
}

.allContent {
  width: 95%;
  margin-left: 2.5%;
  margin-top: 13px;
}

.field {
  font-family: "RelewayBold", Helvetica, Arial;
  font-size: 13pt;
  color: #414142;
  text-transform: uppercase;
}

.period {
  font-family: "OpenSans", Helvetica, Arial;
  font-size: 9pt;
  color: #636467;
}

hr {
  font-family: Arial, sans-serif; /* choose the font you like */
  text-align: center; /* horizontal centering */
  line-height: 1px; /* vertical centering */
  height: 1px; /* gap between the lines */
  font-size: 1em; /* choose font size you like */
  border-width: 1px 0; /* top and bottom borders */
  border-style: solid;
  border-color: #949698;
  margin: 15px 0px; /* 20px space above/below, 10px left/right */
  overflow: visible;

  /* ensure 1px gap between borders */
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  -ms-box-sizing: content-box;
  -o-box-sizing: content-box;
  box-sizing: content-box;
}

hr:after {
  content: "◄◄✺►►"; /* section sign */
  color: #0085c7;
  display: inline; /* for vertical centering and background knockout */
  padding: 0 0.5em; /* size of background color knockout */
}
</style>
