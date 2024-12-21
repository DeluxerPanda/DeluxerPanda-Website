

    <script>
        const currentYear = new Date().getFullYear();
    </script>

<slot></slot>

<footer>
    <div id="titel">
        <a class="fa" href="https://www.youtube.com/@DeluxerPanda"><img src="youtube.svg" alt="youtube"></a>
        <a class="fa" href="https://www.twitch.tv/DeluxerPanda"><img src="twitch.svg" alt="twitch"></a>
        <a class="fa" href="https://github.com/DeluxerPanda"><img src="github.svg" alt="github"></a>
    </div>
    <p id="Copyright-text">&copy; {currentYear}  | <a href="https://www.DeluxerPanda.se">DeluxerPanda</a></p>
</footer>

<style>
    footer {
        border-radius: 34px;
        background-color: hsla(220, 16%, 22%, 0.700);
    }
    #titel {
        flex-direction:row;
        padding-top: 10px;
    }
    #Copyright-text {
        margin: 0;
    }
    
    #Copyright-text a{
        color: #88c0d0;
        margin: 0;
        cursor: pointer;
        text-decoration: none;
        padding-bottom: 10px;
        font-weight: bold;
    }
    p a:hover {
        opacity: 0.5;
    }

    /* Sociala medier */
    .fa {
        cursor: pointer;
        padding-inline: 5px;
        font-size: 30px;
        width: fit-content;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
        border-radius: 50%;
    }

    .fa:hover {
        opacity: 0.5;
}
</style>

