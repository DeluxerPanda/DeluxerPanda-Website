<script>
    import { onMount } from 'svelte';
    let URL = "https://dv.deluxerpanda.se";
    function redirect() {
      window.location.href = URL;
    }
    onMount(() => {
       window.location.href = URL;
     });
  </script>
  <svelte:head>
    <title>Hej då!</title>
</svelte:head>
<div id="title">
    <h1>DeluxerPanda</h1>
    <hr>
    <h2>Du håller på att gå till</h2>
    <button id="noButton" on:click={redirect}>{URL}</button>
    </div>
    
    <div class="content">
        <button id="button" on:click={redirect}>Gå till <br> {URL}</button>
    </div>
    
    <style>
    .content {
        margin: 10px;
        padding: 20px;
        margin-inline: auto;
        text-align: center;
        background-color: #4c566a;
        border-radius: 45px;
        width: fit-content;
    }
    #button {
        margin: 0;
        padding: 0;
        color: #88c0d0;
        font-size: 32px;
        font-weight: bold;
        background-color: #3b4252;
        border-radius: 20px;
        padding-inline: 10px;
        border: none;
        cursor: pointer;
    }
    #noButton {
        margin: 0;
        padding: 0;
        color: #88c0d0;
        font-weight: bold;
        text-decoration: underline;
        background-color: #4c566a;
        border: none;
        cursor: pointer;
    }

    #title {
        width: fit-content;
        padding-top: 10px;
        margin-inline: auto;
        padding: 20px;
        text-align: center;
        background-color: #4c566a;
        border-radius: 45px;
        padding-bottom: 10px;
    }
    #title h1{
        margin: 0;
        padding: 0;
        color: #88c0d0;
        font-size: 64px;
        font-weight: bold;
    }
    #title h2{
        margin: 0;
        padding: 0;
        color: #88c0d0;
        font-size: 32px;
        font-weight: bold;
    }
    </style>
  