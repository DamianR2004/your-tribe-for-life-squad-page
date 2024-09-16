<script>
      export let data
</script>

<main>
  {#each data.persons as person}
    <p>{person.name}</p>
    {/each}
</main>

<style>
    ul {
        background-color: #000000;
        display: grid;
        margin: 0;
        padding: 0;
        grid-template-columns: 1fr 1.2fr 0.9fr 1fr 2.9fr;
        grid-template-rows: 1.7fr 0.3fr 1fr 1fr 1.5fr 3.5fr;
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

    li {
        background-color: white;
        list-style-type: none;
        border: 5px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        text-align: center;

          &:hover{
            scale: 1.1;
            transition: .25s;
  }
    }

    p {
        margin: 0;
        font-size: 1.2em;
        font-weight: bold;
        color: black;
    }

    .picture-container {
        width: 100%;
        max-width: 150px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    picture img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        object-fit: cover;
    }

    /* Defining grid areas */
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
