<script>
    export let data
</script>

<main>
  <ul>
    <li><a href="/D"><p>D</p></a></li>
    <li><a href="/"><p>C</p></a></li>
    <li><a href="/E"><p>E</p></a></li>
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
      <li class="amir"><img src="images/FbMd9NxXkAIec9W.jpg" width="150" height="150" alt=""/><p>Amir</p></li>
  </ul>
</main>

<style>
  ul {
      background-color: var(--mondrian-black);
      display: grid;
      margin: 0;
      padding: 0;
      grid-template-columns: 1fr 1.2fr 0.9fr 1fr ;
      grid-template-rows: 1.1fr 0.3fr 1fr;
      grid-gap: 2px;
      grid-template-areas:
    "f  f  b  g  g"
    "a  a  b  d  d"
    "a  a  b  d  d"
    "e  e  e  d  d"
    "c  c  h  d  d";
  }


  li:nth-of-type(1) { grid-area: a; }
  li:nth-of-type(2) { grid-area: b; background-color: var(--mondrian-blue); color: var(--text-white); }
  li:nth-of-type(3) { grid-area: c; }
  li:nth-of-type(4) { grid-area: d; background-color: var(--mondrian-yellow); color: var(--text-white); }
  li:nth-of-type(5) { grid-area: e; }
  li:nth-of-type(6) { grid-area: f; background-color: var(--mondrian-yellow); color: var(--text-white); }
  li:nth-of-type(7) { grid-area: g; }
  li:nth-of-type(8) { grid-area: h; background-color: var(--mondrian-red); color: var(--text-white); }
  
  @media screen and (max-width: 500px) {
  ul{
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
"f"
"b"
"g"
"a"
"d"
"e"
"c"
"h"
  }
}


@media screen and (min-width: 501px) and (max-width: 1000px) {
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "f d"
          "b g"
          "e c"
          "a h"
    }
  }

</style>
