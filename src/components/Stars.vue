<template>
  <div>
    <table class="tableStyle">
      <tr v-for="(skill, skillName) in skills" :key="skillName">
        <td style="text-align:right">{{ skillName }}</td>
        <td style="text-align:left; padding-left: 10px">
          {{ giveStars(skill) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["skills"],
  methods: {
    giveStars(level) {
      return "★".repeat(level) + "☆".repeat(5 - level);
    },
  },
};
</script>

<style >

.tableStyle{
    border: 0px;
    width: 100%;
}

</style>
