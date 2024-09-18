<script>
    export let data
</script>
<main>
    {#if data.persons}
    <ul>
        <li><a href="/E"><p>E</p></a></li>
        <li><a href="/"><p>C</p></a></li>
        <li><a href="/team"><p>Ons Team</p></a></li>
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
                <p>{person.name}</p>
            </a>
            </li>
        {/each}
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
        "g  g  h  i  i"
        "g  g  k  l  l"
        "m  m  n  n  o"
        "p  p  n  n  o"
        "q  q  r  s  s"
        "q  q  r  t  t"
        "u  u  u  t  t"

    }
    li:nth-of-type(1) {
        grid-area: a;
    }
    li:nth-of-type(2) {
        grid-area: r;
        background-color: var(--mondrian-blue);
        color: var(--text-white);
    }
    li:nth-of-type(3) {
        grid-area: c;
    }
    li:nth-of-type(4) {
        grid-area: d;
        background-color: var(--mondrian-yellow);
        color: var(--mondrian-black);
    }
    li:nth-of-type(5) {
        grid-area: e;
        background-color: var(--mondrian-white);
    }
    li:nth-of-type(6) {
        grid-area: f;
        background-color: var(--mondrian-yellow);
        color: var(--mondrian-black);
    }
    li:nth-of-type(7) {
        grid-area: g;
        background-color: var(--mondrian-white);
    }
    li:nth-of-type(8) {
        grid-area: s;
        background-color: var(--mondrian-blue);
        color: var(--text-white);
    }
    li:nth-of-type(9) {
        grid-area: t;
        background-color: var(--mondrian-red);
        color: var(--text-white);
    }
    li:nth-of-type(10) {
        grid-area: u;
        background-color: var(--mondrian-blue);
        color: var(--text-white);
    }
    li:nth-of-type(11) {
        grid-area: i;
        background-color: var(--mondrian-red);
        color: var(--text-white);
    }
    li:nth-of-type(12) {
        grid-area: k;
        background-color: var(--mondrian-white);
    }
    li:nth-of-type(13) {
        grid-area: m;
        background-color: var(--mondrian-white);
    }
    li:nth-of-type(14) {
        grid-area: n;
        background-color: var(--mondrian-blue);
        color: var(--text-white);
    }
    li:nth-of-type(15) {
        grid-area: o;
        background-color: var(--mondrian-white);
    }
    li:nth-of-type(16) {
        grid-area: p;
        background-color: var(--mondrian-red);
        color: var(--text-white);
    }
    li:nth-of-type(17) {
        grid-area: q;
        background-color: var(--mondrian-white);
    }
    li:nth-of-type(18) {
        grid-area: b;
        background-color: var(--mondrian-white);
    }
    li:nth-of-type(19) {
        grid-area: h;
        background-color: var(--mondrian-white);
    }
    li:nth-of-type(20) {
        grid-area: l;
        background-color: var(--mondrian-red);
        color: var(--text-white);
    }
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
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "a b"
            "c d"
            "e f"
            "g h"
            "i i"
            "k l"
            "m n"
            "o p"
            "q r"
            "s t"
            "u u"
    }
}
</style>
