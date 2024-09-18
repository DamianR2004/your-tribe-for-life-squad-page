<script>
      export let data
</script>

<main>
    {#if data.persons}
    <ul>
        {#each data.persons as person}
            <li>
              <a href="/person/{person.id}" class="full-link">
                <div class="picture-container">
                    {#if person.avatar}
                        <picture>
                            <source srcset="{person.avatar}?format=avif" type="image/avif" />
                            <source srcset="{person.avatar}?format=webp" type="image/webp" />
                            <img src="{person.avatar}" width="150" height="150" alt="" on:error={() => this.src='/path/to/fallback-avatar.svg'} />                        </picture>
                    {:else}
                        <!-- Fallback -->
                        <img src="/images/afbeelding.png" width="150" height="150" alt="">
                    {/if}
                </div>
                <h2>{person.name}</h2>
             </a>
            </li>
        {/each}
        <li class="squad-link"><a href="/D"><p>D</p></a></li>
        <li class="squad-link"><a href="/E"><p>E</p></a></li>
        <li class="squad-link"><a href="/team"><p>Ons Team</p></a></li>
    </ul>
    {:else}
      <!-- This will show if no people are available -->
      <p>No data available</p>
    {/if}      
</main>

<style>
    ul {
        background-color: var(--mondrian-black);
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
      "g  k  k  i  j"
      "m  m  n  o  o"
      "p  p  n  o  o"
      "p  p  r  r  s"
      "t  t  u  u  s"
      "t  t  u  u  s"
      "v  v  w  w  w"
      "z  z  z  aa  aa";
    }


    li:nth-of-type(1) { grid-area: a; }
    li:nth-of-type(2) { grid-area: b; background-color: var(--mondrian-blue); color: var(--text-white);}
    li:nth-of-type(3) { grid-area: c; }
    li:nth-of-type(4) { grid-area: b; background-color: var(--mondrian-yellow); color: var(--mondrian-black);}
    li:nth-of-type(5) { grid-area: e; }
    li:nth-of-type(6) { grid-area: f; background-color: var(--mondrian-yellow); color: var(--mondrian-black);}
    li:nth-of-type(7) { grid-area: h; background-color: var(--mondrian-blue); color: var(--text-white); }
    li:nth-of-type(8) { grid-area: i; background-color: var(--mondrian-red); color: var(--text-white);}
    li:nth-of-type(9) { grid-area: r; background-color: var(--mondrian-yellow); color: var(--mondrian-black);}
    li:nth-of-type(10) { grid-area: k; }
    li:nth-of-type(11) { grid-area: g; }
    li:nth-of-type(12) { grid-area: s; background-color: var(--mondrian-blue); color: var(--text-white);}
    li:nth-of-type(13) { grid-area: t; background-color: var(--mondrian-red); color: var(--text-white);}
    li:nth-of-type(14) { grid-area: u; }
    li:nth-of-type(15) { grid-area: m; }
    li:nth-of-type(16) { grid-area: n; background-color: var(--mondrian-blue); color: var(--text-white);}
    li:nth-of-type(17) { grid-area: o; }
    li:nth-of-type(18) { grid-area: p; }
    li:nth-of-type(19) { grid-area: d; }
    li:nth-of-type(20) { grid-area: j; background-color: var(--mondrian-yellow); color: var(--mondrian-black);}
    li:nth-of-type(21) { grid-area: v; }
    li:nth-of-type(22) { grid-area: w; background-color: var(--mondrian-yellow); color: var(--mondrian-black);}
    li:nth-of-type(23) { grid-area: z; }
    li:nth-of-type(24) { grid-area: aa; }
    li:nth-of-type(23) { grid-area: ab; }
    li:nth-of-type(23) { grid-area: ac; }



  
    @media screen and (max-width: 500px) {
    ul{
        display: grid;
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
  "u"
    }
}

@media screen and (min-width: 501px) and (max-width: 1000px) {
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "a b"
            "c d"
            "e f"
            "g h"
            "i j"
            "k k"
            "m n"
            "o p"
            "q q"
            "r r"
            "s t"
            "u u"
            "v w"
            "z aa"
    }
}

</style>
