<div id="title">
<h1>DeluxerPanda</h1>
<hr>
<h2>Väkommen till min hemsida!</h2>
</div>

<div class="content">
<p>Här kan du se alla mina olika projekt</p>
</div>

<div class="project-container">

    <div class="projekt-box">
        <h2>Den här hemsidan</h2>
        <h1 class="label">Hemsida</h1>
        <p>Här kan du se all kod för denna hemsida</p>
        <a href="https://github.com/DeluxerPanda/DeluxerPanda-Website" class="button">GitHub</a>
    </div>
</div>

<div class="project-container">

    <div class="projekt-box">

        <h2>NÄrvaro DV</h2>
        <h1 class="label">Hemsida</h1>
        <p>En web baserad Närvaro lista</p>
        <a href="https://github.com/DeluxerPanda/NarvaroDV" class="button">GitHub</a>
        <a href="https://narvarodv.deluxerpanda.se/" class="button">Besök</a>
    
    </div>

<div class="projekt-box">

    <h2>GiveMeSomeLight</h2>
    <h1 class="label">Minecraft client Fabric mod</h1>
    <p>Ger dig ljus om du håller i en fackla till exempel</p>
    <a href="https://github.com/DeluxerPanda/GiveMeSomeLight" class="button">GitHub</a>
    <a href="https://modrinth.com/mod/givemesomelight" class="button">Ladda ner (Modrinth)</a> 

</div>

<div class="projekt-box">

    <h2>Short Message Service</h2>
    <h1 class="label">Android app</h1>
    <p>Schemalägg dina meddelanden dagligen, veckovis, månadsvis eller årligen </p>
    <a href="https://github.com/DeluxerPanda/Short_Message_Service" class="button">GitHub</a>
    <a href="https://github.com/DeluxerPanda/Short_Message_Service/releases/latest" class="button">Ladda ner
      (GitHub)</a>

</div>

<!-- <div class="projekt-box">

    <h2>Arch configs</h2>
    <p>My dwm setup in Arch BTW</p>
    <a href="https://github.com/DeluxerPanda/Delux-dwm" class="button">GitHub</a>

</div> -->

<div class="projekt-box">

    <h2>Retro Delux</h2>
    <h1 class="label">Spel</h1>
    <p>A pong game made in lua using LÖVE</p>
    <a href="https://github.com/DeluxerPanda/Retro-Delux" class="button">GitHub</a>
    <a href="https://github.com/DeluxerPanda/Retro-Delux/releases" class="button">Ladda ner (GitHub)</a>

</div>

<div class="projekt-box">

    <h2>DeluxerPanda.se</h2>
    <h1 class="label">Hemsida</h1>
    <p>En sida helt gjord endast med html och css och med fullt fungerande flikar utan användning av ID:n
      eller javascript </p>
    <a href="https://github.com/DeluxerPanda/DeluxerPanda.se" class="button">GitHub</a>
    <a href="https://deluxerpanda.github.io/DeluxerPanda.se/" class="button">Besök</a>

</div>

<div class="projekt-box">

    <h2>Server Uptime</h2>
    <h1 class="label">Minecraft server plugin</h1>
    <p>Kontrollera hur länge servern har varit igång</p>
    <a href="https://github.com/DeluxerPanda/ServerUptime" class="button">GitHub</a>
    <a href="https://github.com/DeluxerPanda/ServerUptime/releases" class="button">Ladda ner (GitHub)</a>
    <a href="https://modrinth.com/plugin/serveruptime" class="button">Ladda ner (Modrinth)</a>

</div>
</div>

<div class="content">
    <p>Forks</p>
</div>

<div id="fork-container">

    <div class="projekt-box">

        <h2>DWM</h2>
        <h1 class="label">Linux</h1>
        <p>En dynamisk fönsterhanterare för X11.</p>
        <a href="https://github.com/DeluxerPanda/dwm" class="button">GitHub</a>
    
    </div>

<div class="projekt-box">

    <h2>SlStatus</h2>
    <h1 class="label">Linux</h1>
    <p>En status bar för DWM</p>
    <a href="https://github.com/DeluxerPanda/slstatus" class="button">GitHub</a>

</div>
</div>

<div class="content">
    <p>Arkiverat</p>
<mark>(Dom här projekten arbetas inte på längre)</mark>
</div>
<div id="arcive-container">

    <div class="projekt-box">

        <h2>Auto Clicker</h2>
        <h1 class="label">Program</h1>
        <p>gui-program som klickar en gång efter en viss tid</p>
        <a href="https://github.com/DeluxerPanda/Auto-Clicker" class="button">GitHub</a>
    
    </div>

    <div class="projekt-box">
    
        <h2>Sweets For The Cannibals</h2>
        <h1 class="label">Hemsida</h1>
        <p>A blend between synth Pop and different experimental music</p>
        <a href="https://github.com/DeluxArkive/Sweets-For-The-Cannibals" class="button">GitHub</a>
    
    </div>

    <div class="projekt-box">
    
        <h2>Text To Speech</h2>
        <h1 class="label">Chrome-tillägg</h1>
        <p>Text Till Tal Chrome-tillägg</p>
        <a href="https://github.com/DeluxerPanda/Text_To_Speech" class="button">GitHub</a>
    
    </div>
</div>

<style>
    mark{
        background-color:#ff00003e; 
        padding-inline:5px; 
        border-radius: 45px; 
        font-size: 14px;

    }
.content {
    margin: 10px;
    padding: 20px;
    margin-inline: auto;
    text-align: center;
    background-color: hsla(220, 16%, 22%, 0.700);
    border-radius: 45px;
    width: fit-content;

}

.projekt-box{
    background-color: hsla(220, 16%, 22%, 0.700);;
    color: #fff;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    text-align: center;
    width: calc(33.33% - 20px);
    /* Three columns per row */
    transition: background-color 0.3s ease-in-out;

}

 .project-container{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    margin-top: 30px;
}
.label{
    display: inline;
    font-size: 16px;
    color: #ebcb8b;
    background-color: #434c5e;
    border-radius: 20px;
    padding-inline: 10px;
    width: fit-content;
}
#fork-container{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    margin-top: 30px;
}
#arcive-container{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    margin-top: 30px;
}
.button {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
    background-color: #434c5e;
    color: #fff;
    border: none;
}

.button:hover {
    opacity: 0.5;
}

p {
    margin: 0;
    padding: 0;
    color: #88c0d0;
    font-size: 32px;
    font-weight: bold;
}
.projekt-box p {
    font-size: 20px;
}
.projekt-box h2 {
    margin: 0;
}
#title {
    width: fit-content;
    padding-top: 10px;
    margin-inline: auto;
    padding: 20px;
    text-align: center;
    background-color: hsla(220, 16%, 22%, 0.700);
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

@media only screen and (max-width: 600px) {
#title h1{
    margin: 0;
    padding: 0;
    color: #88c0d0;
    font-size: 2rem;
    font-weight: bold;
}
#title h2{
    margin: 0;
    padding: 0;
    color: #88c0d0;
    font-size: 1rem;
    font-weight: bold;
}
p {
    margin: 0;
    padding: 0;
    color: #88c0d0;
    font-size: 1rem;
    font-weight: bold;
}

.projekt-box p {
    font-size: 15px;
}
.projekt-box h2 {
    font-size: 10px;
}
.button {
    display: inline-block;
    padding: 5px 10px;
    margin: 10px;
    border-radius: 5px;
    font-size: 10px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
    background-color: #4caf4f4d;
    color: #fff;
    border: none;
}
}
</style>
