<script>
  export let data;
</script>

<main>
  <article class="card">
    <picture class="card-image">
        <source srcset="{data.person.avatar}?format=avif" type="image/avif">
        <source srcset="https://fdnd.directus.app/items/person{data.person.avatar}?format=webp" type="image/webp">
        <img class="" src="https://fdnd.directus.app/items/person{data.person.avatar}" alt="The avatar of {data.person.name}" height="150" width="150"/> 
    </picture>
    <section class="card-content">
      <div class="card-name">
        <h2 alt="{data.person.name} {data.person.surname}">{data.person.name} {data.person.surname}</h2>
        <h3 alt="The nickname of {data.person.name}, {data.person.nickname}">{data.person.nickname}</h3>
      </div>
      <p class="card-text" alt="A discriptive bio">{data.person.bio}</p>
    </section>
  </article>
</main>

<style>

    main {
        display: grid;
        place-items: center;
        height: 100dvh;
    }

    .card {
      width: 300px;
      padding-bottom: 20px;
      margin: 10px;
      overflow: hidden;
      text-align: center;
  
      /* Black border with multi-colored effect */
      background-color: white;
      border: 7px solid black; /* Main black border */
      border-top-color: red;
      border-left-color: yellow;
      border-right-color: blue;
    }
  
    .card-image {
      width: 150px;
      height: 150px; 
      margin-top: 20px;
      overflow: hidden;
      transform: translateY(-100%);
      animation: slide-in-top 3s forwards ease-in-out;
  }
  
  @keyframes slide-in-top {
      0% {
          transform: translateY(-200%);
      }
      100% {
          transform: translateY(0);
      }
  }
  
  .card-image img {
      object-fit: contain;
  }
    
  
    .card-content {
      padding: 20px;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
    }
  
    .card-name {
      margin-top: auto;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
  
      white-space: wrap;
      transform: translateX(100%);
      animation: slide-in-right 3s forwards ease-in-out;
  }
  
  @keyframes slide-in-right {
      0% {
          transform: translateX(100%);
      }
      100% {
          transform: translateX(0);
      }
  }
  
    .card-text {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 1.5;
      text-align: center;
      overflow-y: auto;
  
      white-space: wrap;
      transform: translateX(-200%);
      animation: slide-in-left 3s forwards ease-in-out;
    }
  
    @keyframes slide-in-left {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  
    h2 {
      font-size: 30px;
    }
  
    h3 {
      font-size: 25px;
    }
  </style>




