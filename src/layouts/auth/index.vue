<template>
	<div class="row fullscreen">
		<div class="xs-hide sm-hide col-6 full-height bg-blue-9 relative-position">
			<auth-placeholder class="absolute-center" />
			<h5 class="absolute-bottom q-pb-lg text-white text-center">
				WELCOME TO QA APP
			</h5>
		</div>
		<div class="col-12 col-md-6 q-pa-md">
			<router-view />
		</div>
	</div>
</template>

<script>
import AuthPlaceholder from './components/auth-placeholder';

export default {
	components: {
		AuthPlaceholder,
	},
};
</script>

<style></style>
