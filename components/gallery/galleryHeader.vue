<template>
    <header>
      <img src="~/assets/marsRover.svg" alt="Mars rover">
      <h2>Browse Mars Photos</h2>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        align-items: flex-end;
        margin-bottom: 20px;
        img{
            margin-right: 30px;
            height: 50px;
        }
        h2{
            line-height: 50px;
            margin: 0;
            padding: 0;
            font-size: 46px;
        }
    }
</style>