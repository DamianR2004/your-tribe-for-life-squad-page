<script>
    export let data
</script>
<main>
    <ul>
        <li><p>D</p></li>
        <li><p>C</p></li>
        <li><p>E</p></li>
        <li><p>Ons Team</p></li>
        {#each data.persons as person}
            <li>
                <p>{person.name}</p>
            </li>
        {/each}

    </ul>
</main>

<style>
    ul {
        background-color: #000000;
        display: grid;
        margin: 0;
        padding: 0;
        grid-template-columns: 4fr 7fr 6fr 3fr 8fr;
        grid-template-rows: 8fr 3fr 5fr 9fr 8fr 9fr 8fr 9fr 10fr 9fr;
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
   "t  t  u  u  s"

    }
    li {
        background-color: white;
        list-style-type: none;
        border: 5px solid black;
        &:hover{
            scale: 1.1;
            transition: .25s;
        }
    }

    li:nth-of-type(1) {
        grid-area: a;
    }

    li:nth-of-type(2) {
        grid-area: b;
        background-color: #1500b2;
    }

    li:nth-of-type(3) {
        grid-area: c;
    }

    li:nth-of-type(4) {
        grid-area: d;
        background-color: yellow;
    }

    li:nth-of-type(5) {
        grid-area: e;
    }

    li:nth-of-type(6) {
        grid-area: f;
        background-color: yellow;
    }

    li:nth-of-type(7) {
        grid-area: g;
    }

    li:nth-of-type(8) {
        grid-area: s;
        background-color: #1500b2;
    }

    li:nth-of-type(9) {
        grid-area: t;
        background-color: red;
    }

    li:nth-of-type(10) {
        grid-area: u;
    }

    li:nth-of-type(11) {
        grid-area: i;
        background-color: red;
    }

    li:nth-of-type(12) {
        grid-area: k;
    }

    li:nth-of-type(13) {
        grid-area: m;
    }

    li:nth-of-type(14) {
        grid-area: n;
        background-color: blue;
    }

    li:nth-of-type(15) {
        grid-area: o;
    }
    li:nth-of-type(16) {
        grid-area: p;
        background-color: red;
    }
    li:nth-of-type(17) {
        grid-area: q;

    }
    li:nth-of-type(18) {
        grid-area: r;
    }
    li:nth-of-type(19) {
        grid-area: s;
        background-color: blue;
        color: white;
    }
    li:nth-of-type(20) {
        grid-area: l;
        background-color: red;
        color: white;
    }

    li:nth-of-type(21) {
        grid-area: j;
    }

    @media (width < 28em) {
        ul{
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
</style>

