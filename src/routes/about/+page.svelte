<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h1 class="title">R A P W A M</h1>
	<p class="tagline">Rent A Place. Without Annoying Me</p>
	<br />
	<p class="description">
		Confidently manage rental properties in a safe, secure, remote, and asynchronous fashion. Stop
		letting tennants run your life.
	</p>
</div>

<style>
	.title {
		color: var(--default-color);
	}
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
	.tagline {
		text-align: center;
		color: var(--default-color);
	}
	.description {
		text-align: left;
		color: var(--darker-color);
	}
</style>
