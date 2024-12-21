<script>
    import { page } from '$app/stores';
  </script>
<svelte:head>
    <title>{$page.status}</title>
</svelte:head>

<div id="title">
    <h1>DeluxerPanda</h1>
    <hr>
    <h2>Något gick fel...</h2>
    </div>
    
    <div class="content">
    <p>{$page.status}</p>
    <p>{$page.error?.message}</p>
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
    p {
        margin: 0;
        padding: 0;
        color: #88c0d0;
        font-size: 32px;
        font-weight: bold;
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
    