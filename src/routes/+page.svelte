<script>
      export let data
</script>

<main>
    <ul>
        {#each data.persons as person}
            <li>
                <div class="picture-container">
                    {#if person.avatar}
                        <picture>
                            <source srcset="{person.avatar}?format=avif" type="image/avif" />
                            <source srcset="{person.avatar}?format=webp" type="image/webp" />
                            <img src="{person.avatar}" alt="{person.name}" on:error="{() => this.src='/path/to/fallback-avatar.svg'}" />
                        </picture>
                    {:else}
                        <!-- Fallback -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" fill="#ffcc00"/>
                            <circle cx="9" cy="10" r="1" fill="black"/>
                            <circle cx="15" cy="10" r="1" fill="black"/>
                            <path d="M8 16c1.333-1 2.667-1 4 0s2.667 1 4 0" fill="none" stroke="black" />
                        </svg>
                    {/if}
                </div>
                <p>{person.name}</p>
            </li>
        {/each}
        <li><p>D</p></li>
        <li><p>C</p></li>
        <li>E</li>
        <li><p>Ons Team</p></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</main>

<style>
    ul {
        background-color: #000000;
        display: grid;
        margin: 0;
        padding: 0;
        grid-template-columns: 1fr 1.2fr 0.9fr 1fr 2fr;
        grid-template-rows: 1.1fr 0.3fr 1fr 1fr 1.5fr 1fr;
        grid-gap: 2px;
        grid-template-areas:
      "a  a  b  c  c"
      "a  a  b  d  d"
      "e  e  f  d  d"
      "g  h  h  i  j"
      "g  k  k  l  j"
      "m  m  n  o  o"
      "p  p  n  o  o"
      "q  q  r  r  s"
      "t  t  u  u  s"
      "t  t  u  u  s";
    }


    li:nth-of-type(1) { grid-area: a; }
    li:nth-of-type(2) { grid-area: b; background-color: #1500b2; }
    li:nth-of-type(3) { grid-area: c; }
    li:nth-of-type(4) { grid-area: d; background-color: yellow; }
    li:nth-of-type(5) { grid-area: e; }
    li:nth-of-type(6) { grid-area: f; background-color: yellow; }
    li:nth-of-type(7) { grid-area: g; }
    li:nth-of-type(8) { grid-area: s; background-color: #1500b2; }
    li:nth-of-type(9) { grid-area: t; background-color: red; }
    li:nth-of-type(10) { grid-area: u; }
    li:nth-of-type(11) { grid-area: i; background-color: red; }
    li:nth-of-type(12) { grid-area: k; }
    li:nth-of-type(13) { grid-area: m; }
    li:nth-of-type(14) { grid-area: n; background-color: blue; }
    li:nth-of-type(15) { grid-area: o; }
    li:nth-of-type(16) { grid-area: p; background-color: red; }
    li:nth-of-type(17) { grid-area: q; }
    li:nth-of-type(18) { grid-area: r; }
    li:nth-of-type(19) { grid-area: h; background-color: blue; color: white; }
    li:nth-of-type(20) { grid-area: l; background-color: red; color: white; }
    li:nth-of-type(21) { grid-area: j; }
  

    @media (max-width: 28em) {
        ul {
            grid-template-columns: 1fr;
            grid-template-areas:
        "a"
        "b"
        "c"
        "d"
        "e"
        "f"
        "g"
        "h"
        "i"
        "j"
        "k"
        "l"
        "m"
        "n"
        "o"
        "p"
        "q"
        "r"
        "s"
        "t"
        "u";
        }
    }
</style>
