sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/m/MessageToast"
], function (Controller, UIComponent, MessageToast) {
	"use strict";

	return Controller.extend("com.telekom.easys.controller.BaseController", {
		
		/**
		 * Convenience method for accessing the router in every controller of the application.
		 * @public
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter: function () {
			return this.getOwnerComponent().getRouter();
		},

		/**
		 * Convenience method for getting the view model by name in every controller of the application.
		 * @public
		 * @param {string} sName the model name
		 * @returns {sap.ui.model.Model} the model instance
		 */
		getModel: function (sName) {
			return this.getView().getModel(sName);
		},

		/**
		 * Convenience method for setting the view model in every controller of the application.
		 * @public
		 * @param {sap.ui.model.Model} oModel the model instance
		 * @param {string} sName the model name
		 * @returns {sap.ui.mvc.View} the view instance
		 */
		setModel: function (oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		/**
		 * @desc a MessageToast gets shown
		 * @param {String} sMessage - the text, which is passed is shown to the user
		 * @param {Function} onClose - the callback function after closing of message toast
		 */
		showMessageToast: function (sMessage, onClose) {
			MessageToast.show(sMessage, {
				duration: 3000,
				width: "15em",
				autoClose: true,
				onClose: onClose,
				closeOnBrowserNavigation: true,
				my: "center top",
				at: "center top",
				offset: "0 10"
			});
		},

		/**
		 * @desc Convenience method for getting the resource bundle.
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
		 */
		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		}

	});

});