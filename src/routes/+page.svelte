<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="welcome">
	<h1><a href="/about"><b><i id="title">R A P W A M™️</i></b></a></h1>
	<img id="welcomeImage" src="svelte-welcome.png" alt="Welcome" />
	<h1 id="shout"><i>Click the button</i></h1>
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
		font-size: 1em;
	}
	/* #title {
		color: rgb(0, 134, 123);
	} */
</style>
