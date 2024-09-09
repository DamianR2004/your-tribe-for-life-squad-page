<script>
  export let data
</script>

<main>
  {#each data.persons as person}
  <ul>
    <li>
    <p>{person.name}</p>
  </li>
  </ul>
  {/each}
</main>

<style>
main {
      box-sizing: border-box;
      border: 10px solid black;
      width: 100%;
      height: 100%;
      box-shadow: 4px 4px 3px #dddddd;
      background-color: black;
      display: grid;
      grid-template-columns: 1fr 1.2fr 0.9fr 1fr 2.9fr;
      grid-template-rows: 1.7fr 0.3fr 1fr 1fr 1.5fr 3.5fr;
      grid-gap: 10px;
      grid-template-areas: 
            "a b d d f" 
            "a c d d f" 
            "a c e e f" 
            "a c e e g"
            "a c e e h" 
            "i i i j j"
            "k k l m m";
}
ul {
  
      background-color: white;
}

ul {
      background-color: white;
}

ul:nth-of-type(1) {
      grid-area: a;
}

ul:nth-of-type(2) {
      grid-area: b;
      background-color: #1500b2;
}

ul:nth-of-type(3) {
      grid-area: c;
}

ul:nth-of-type(4) {
      grid-area: d;
}

ul:nth-of-type(5) {
      grid-area: e;
}

ul:nth-of-type(6) {
      grid-area: f;
      background-color: yellow;
}

ul:nth-of-type(7) {
      grid-area: g;
}

ul:nth-of-type(8) {
      grid-area: h;
      background-color: #1500b2;
}

ul:nth-of-type(9) {
      grid-area: i;
      background-color: red;
}

ul:nth-of-type(10) {
      grid-area: j;
}

ul:nth-of-type(11) {
      grid-area: k;
      background-color: green;
}

ul:nth-of-type(12) {
      grid-area: l;
      background-color: green;
}

ul:nth-of-type(13) {
      grid-area: m;
      background-color: green;
}

ul:nth-of-type(14) {
      grid-area: n;
      background-color: green;
}

ul:nth-of-type(15) {
      grid-area: o;
      background-color: green;
}
ul:nth-of-type(16) {
      grid-area: p;
      background-color: green;
}
ul:nth-of-type(17) {
      grid-area: q;
      background-color: green;
}
ul:nth-of-type(18) {
      grid-area: r;
      background-color: green;
}
ul:nth-of-type(19) {
      grid-area: s;
      background-color: green;
}
ul:nth-of-type(20) {
      grid-area: t;
      background-color: green;
}

ul:nth-of-type(21) {
      grid-area: u;
}

ul:nth-of-type(22) {
      grid-area: v;
      background-color: green;
}

ul:nth-of-type(23) {
      grid-area: w;
      background-color: green;
}

ul:nth-of-type(24) {
      grid-area: aa;
      background-color: green;
}

ul:nth-of-type(25) {
      grid-area: ab;
      background-color: green;
}

ul:nth-of-type(26) {
      grid-area: ac;
      background-color: green;
}
ul:nth-of-type(27) {
      grid-area: ad;
      background-color: green;
}
ul:nth-of-type(28) {
      grid-area: ae;
      background-color: green;
}
ul:nth-of-type(29) {
      grid-area: af;
      background-color: green;
}
ul:nth-of-type(30) {
      grid-area: ag;
      background-color: green;
}
</style>
