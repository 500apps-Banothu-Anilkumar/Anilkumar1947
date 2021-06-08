<div>
<ul>
  <li v-bind:v-for="nam in names"> {{ nam }} </li>
</ul>
</div>
<script>
export default {
  data()
  {
  return {
names:["Anil","Kalpana","Mummy"]
  }
  }
  }
</script>