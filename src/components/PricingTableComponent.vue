<script>
export default {
  name: 'PricingTableComponent',
  props: {
    name: String,
    price: String,
    lessons: String,
    materials: String,
    homework: String,
    platform: String,
    certificate: String,
    communication: String,
    employment: String
  }
}
</script>

<template>
  <tbody>
    <tr>
      <th class="curriculum">{{ name }}</th>
      <td data-label="price">{{ price }}</td>
      <td data-label="lessons">{{ lessons }}</td>
      <td data-label="materials">{{ materials }}</td>
      <td data-label="homework">{{ homework }}</td>
      <td data-label="platform">{{ platform }}</td>
      <td data-label="certificate">{{ certificate }}</td>
      <td data-label="communication">{{ communication }}</td>
      <td data-label="employment">{{ employment }}</td>
    </tr>
  </tbody>
</template>

<style scoped></style>
