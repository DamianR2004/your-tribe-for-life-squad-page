<script>
    export let avatar = '';
    export let name = '';
    export let id = '';
</script>

<style>
    .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
        max-width: 300px;
    }

    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    .name {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .id {
        color: #555;
    }
</style>

<div class="card">
    <img class="avatar" src={avatar} alt="Avatar" />
    <div class="info">
        <div class="name">{name}</div>
        <div class="id">{id}</div>
    </div>
</div>
