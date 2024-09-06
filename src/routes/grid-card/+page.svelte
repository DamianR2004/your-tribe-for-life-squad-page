<script>

    export let name;
    export let avatar;
    export let id;
</script>

<div class="card">
    <img src={avatar} alt={name} class="avatar" />
    <h3>{name}</h3>
    <p>ID: {id}</p>
</div>

<style>
    .card {
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
        text-align: center;
        max-width: 200px;
    }
    .avatar {
        border-radius: 50%;
        width: 80px;
        height: 80px;
    }
</style>