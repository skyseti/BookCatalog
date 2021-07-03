sap.ui.define([
	"../controller/BaseController",
	"../model/models",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(BaseController, Models, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("sap.ui.demo.basicTemplate.controller.Home", {

		onInit: function () {
			this.getRouter().getRoute("home").attachMatched(this.onRouteMatched, this);
		},
		
		/**
		 * Handler for "Home" route.
		 */
		onRouteMatched: function(){
			var oAuthorsModel = this.getModel("AuthorsModel");
			if (!oAuthorsModel) {
				oAuthorsModel = Models.createAuthorsModel();
				this.setModel(oAuthorsModel, "AuthorsModel");
			}
		},
		
		/**
		 * Author selection handler. Fires when user select Author
		 * @param {string} oEvent parameters
		 */
		onAuthorSelectedChange: function(oEvent){
			var nIdBook = oEvent.getParameter("selectedItem").getBindingContext("AuthorsModel").getObject().idBook;
			var oBooksModel = this.getModel("BooksModel");
			if (!oBooksModel) {
				oBooksModel = Models.createBooksModel();
				this.setModel(oBooksModel, "BooksModel");
			}
			var aFilters = [new Filter("id", FilterOperator.EQ, nIdBook)];
			this.getView().byId("idBookListSelect").getBinding("items").filter(aFilters);
		}
	});
});