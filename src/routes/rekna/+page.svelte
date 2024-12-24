<script>
    let number = 0;

    function countPlus() {
        number++
    }
    function countMinus() {
        if (number != 0) {
            number--
    }
    }
    function countReset() {
        number = 0
    }
</script>
<h1>{number}</h1>
<button onclick="{countPlus}"> <h1>Klicka mig för (+)</h1></button>
<br>
<br>
<button onclick="{countMinus}"> <h1>Klicka mig för (-)</h1></button>
<br>
<br>
<button onclick="{countReset}"> <h1>Klicka mig för (Reset)</h1></button>
<br>
<br>
<style>
    button{
        background-color: aquamarine;
    }
    h1{
        color: cadetblue;
    }
</style>