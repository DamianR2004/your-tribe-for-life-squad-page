<script>
  export let data;
</script>

{#if data.persons}
{#each data.persons as person}
  <article class="detail-card">
   <div class="detail-image">
    <picture>
        <source srcset="{person.avatar}?format=avif" type="image/avif">
        <source srcset="https://fdnd.directus.app/items/person{person.avatar}?format=webp" type="image/webp">
        <img class="detail-avatar" src="https://fdnd.directus.app/items/person{person.avatar}" alt="The avatar of {person.name}" height="150" width="150"/> 
    </picture>
   </div>
    <section class="detail-content">
      <div class="detail-names">
        <h2 class="first-surname" alt="{person.name} {person.surname}">{person.name} {person.surname}</h2>
        <h3 class="nickname" alt="The nickname of {person.name}, {person.nickname}">{person.nickname}</h3>
      </div>
      <p class="detail-bio" alt="A discriptive bio">{person.bio}</p>
    </section>
  </article>
{/each}
{:else}
     <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}

<style>

  .detail-card {
    width: 300px;
    height: 500px;
    padding-bottom: 20px;
    margin: 10px;
    overflow: hidden;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;
    border: 7px solid black; 
    border-top-color: red;
    border-left-color: yellow;
    border-right-color: blue;
  }

  .detail-image {
    width: 150px;
    height: 150px; 
    margin-top: 30px;
    margin-bottom: 10px;
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

.detail-image .detail-avatar {
    object-fit: contain;
    object-fit: contain;
    width: 100%;
    height: 100%;
}

.detail-avatar {
    margin-top: 10px;
    margin-bottom: 10px;
}
  
  .detail-content {
    padding: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }

  .detail-names {
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

  .detail-bio {
    margin-top: 20px;
    padding-bottom: 50px;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    height: 200px;
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

  .first-surname {
    font-size: 27px;
  }

  .nickname {
    font-size: 22px;
    font-weight: 300;
  }
</style>
