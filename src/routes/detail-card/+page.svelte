<script>
	export let data
</script>
{#each data.persons as person}
<article class="card">
	<img src="{person.avatar}" alt="" class="card-image">
	<!-- <picture class="card-image">
		<source srcset="{person.avatar} ?format=avif" type="image/avif">
		<source srcset="https://fdnd.directus.app/items/person<%= person.avatar %>?format=webp" type="image/webp">
		<img class="image-size" src="https://fdnd.directus.app/items/person<%= person.avatar %>" alt=""/> 
	</picture> -->
	<div class="card-content">
	  <div class="card-name">
		<h2>{person.name}</h2>
	    <h3>{person.nickname}</h3>
	  </div>
	  <p class="card-text">{person.bio}</p>
	</div>
</article>
{/each}

<style>
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

/* body {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-family: Arial, sans-serif;
	background-color: #f4f4f4; 
	background-color: black;
} */

.card {
	width: 300px;	
	height: 500px;
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
}

.card-text {
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 18px;
	line-height: 1.5;
	text-align: center;
	height: 200px;
	overflow-y: auto;
}

</style>