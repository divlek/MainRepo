/**
 * 
 */

var ServerSummaryControllerModule = (function () {
	/*
	 * Constructor 
	 */
	function ServerSummaryController($scope, $routeParams, Server)		
	{		
		var serverId = $routeParams.serverId;
						
		function fetchAndUpdate(){
			var result = Server.getServerSummary(serverId);			
			$scope.serverNames = result.serverNames;
		}
					
		$interval(fetchAndUpdate, 3000);
					        	       
	};	

	/*
	 * Injection parameters
	 */
	ServerSummaryController.injection = [
	                          '$scope',	  	                       
	                          '$routeParams',
	                          'Server',
	                          ServerSummaryController
	                          ];	
	return ServerSummaryController;
})();