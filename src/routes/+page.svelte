<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="welcome">
	<img id="welcomeImage" src="svelte-welcome.png" alt="Welcome" />
	<h1 id="shout">Click the button</h1>
	<Counter />
</div>
<div />

<style>
	.welcome {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#welcomeImage {
		width: 45%;
		min-width: 250px;
	}
	#shout {
		margin-top: 5%;
	}
</style>
