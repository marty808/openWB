<header>
	<!-- Fixed navbar -->
	<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
		<a class="navbar-brand" href="./index.php">
			<span>openWB</span>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="collapsibleNavbar">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" data-select="" href="./index.php">Home</a>
				</li>

				<li class="nav-item">
					<a class="nav-link" data-select="firstSteps">Erste Schritte</a>
				</li>

				<li class="nav-item">
					<a class="nav-link" data-select="index">Index</a>
				</li>

			</ul>
		</div>
	</nav>
</header>

<script>
	$(document).ready(function(){
		// change content of website if navbar is clicked
		$(document).on('click', '.nav-link', function() {
			switch ( $(this).data("select") ) {
				// now show selected topic
				case "firstSteps":
					$("#ersteSchritteDiv").show();
					$("#indexDiv").hide();
					$("#helpFooterText").text("Sie befinden sich hier: Hilfe/Erste Schritte");
					break;
				case "index":
					$("#ersteSchritteDiv").hide();
					$("#indexDiv").show();
					$("#helpFooterText").text("Sie befinden sich hier: Hilfe/Index");
					break;
			}
		});
	});
</script>
