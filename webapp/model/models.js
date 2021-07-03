sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/m/MessageToast"
], function(JSONModel, Device, MT) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createAuthorsModel: function(){
			var oModel = new JSONModel(); 
			var sUri = "https://fakerestapi.azurewebsites.net/api/v1/Authors"
			oModel.loadData(sUri);
			oModel.attachRequestFailed(function(){
				console.log(sUri + " - service is not available");
			});
			return oModel;
		},
		
		createBooksModel: function(){
			var oModel = new JSONModel(); 
			var sUri = "https://fakerestapi.azurewebsites.net/api/v1/Books"
			oModel.loadData(sUri);
			oModel.attachRequestFailed(function(){
				console.log(sUri + " - service is not available");
			});
			return oModel;
		}

	};
});