/** global: VRS */
if(VRS && VRS.globalDispatch && VRS.serverConfig) {
	VRS.globalDispatch.hook(VRS.globalEvent.bootstrapCreated, function(bootStrap) {
		VRS.globalOptions.aircraftAllowRegistrationFlagOverride = true;
	});
}
