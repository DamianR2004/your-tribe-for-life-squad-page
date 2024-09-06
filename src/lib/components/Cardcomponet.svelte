<script>
    import Card from './grid-card';

    let cards = [
        { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/80' },
        { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/80' },
        { id: 3, name: 'Alice Johnson', avatar: 'https://via.placeholder.com/80' }
    ];
</script>

<div class="card-container">
    {#each cards as card}
        <Card {card.id} {card.name} {card.avatar} />
    {/each}
</div>

<style>
    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
    }
</style>
