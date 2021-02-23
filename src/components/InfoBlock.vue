<template>
    <div>

    <div class="title">
       <p v-if="title">
           {{ title }}
       </p>
       <hr>
   </div>

   <div class="text">
       <p v-if="text">
           {{ text }}
       </p>
   </div>

   

   </div>
</template>

<script>
export default {
    props:['title', 'text', 'informations']
}
</script>



<style>

.title{
   font-size: 13pt;
  color: #414142;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-family: "RelewayBold", Helvetica, Arial;
  padding-top: 5px;
letter-spacing: 1px;

}

.text{
    font-family: "OpenSans", Helvetica, Arial;
    font-size: 10pt;
    width: 80%;
    padding-left: 20px;
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
  margin: 20px 10px; /* 20px space above/below, 10px left/right */
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

/* opera doesn't render correctly. hide section sign */
x:-o-prefocus, hr:after {
  content: "";
}

</style>