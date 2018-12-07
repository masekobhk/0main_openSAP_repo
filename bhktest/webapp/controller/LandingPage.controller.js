sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("bhktest.controller.LandingPage", {

		zoomToMap: function (oEvent) {
			oEvent.getParameters().context = oEvent.getParameter("thing");
			//this.byId("idMap").openThingCardOnZoom(oEvent);
			this.byId("idMap").doMapZoom(oEvent);
		},

		oMultiRowSelect: function (oEvent) {
			if (this.getOwnerComponent().isTimedOut) {
				this.getOwnerComponent().showTimeoutMessage();
			} else {
				sap.ui.getCore().byId("idBusy").open();
			}
			var oThingObject = oEvent.getParameter("context").getParameters("thing").thingData;
			this.getOwnerComponent().getRouter().navTo("thingpage", {
				thingId: oThingObject.ThingId,
				thingType: oThingObject.ThingType,
				highSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.High || 0,
				mediumSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.Medium || 0,
				lowSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.Low || 0
			});
		},

		oMultiFooterSelect: function (oEvent) {
			if (this.getOwnerComponent().isTimedOut) {
				this.getOwnerComponent().showTimeoutMessage();
			} else {
				sap.ui.getCore().byId("idBusy").open();
			}
			this.getOwnerComponent().getRouter().navTo("thinglistpage", false);
		},

		oSingleHeaderSelect: function (oEvent) {
			if (this.getOwnerComponent().isTimedOut) {
				this.getOwnerComponent().showTimeoutMessage();
			} else {
				sap.ui.getCore().byId("idBusy").open();
			}
			var oThingObject = oEvent.getParameter("context").getParameters("thing").thingData;
			this.getOwnerComponent().getRouter().navTo("thingpage", {
				thingId: oThingObject.ThingId,
				thingType: oThingObject.ThingType,
				highSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.High || 0,
				mediumSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.Medium || 0,
				lowSeverity: oThingObject.DYN_ENT_com_sap_appiot_eventtypes__StandardEventType.Low || 0
			});
		},

		oSingleFooterSelect: function (oEvent) {
			if (this.getOwnerComponent().isTimedOut) {
				this.getOwnerComponent().showTimeoutMessage();
			} else {
				sap.ui.getCore().byId("idBusy").open();
			}
			var oThingObject = oEvent.getParameter("context").getParameters("thing").thingData;
			this.getOwnerComponent().getRouter().navTo("analysispage", {
				thingId: oThingObject.ThingId,
				headerTitle: oThingObject.ThingName,
				subHeaderTitle: oThingObject.ThingExternalId
			});
		},

		onAfterRendering: function () {
			sap.ui.getCore().byId("idBusy").close();
		},
		
		openLink: function(){
			alert("Get file directory");
			new sap.ui.unified.FileUploader({ 
        		uploadUrl : "",
        		buttonText : "Upload",  
        		fileType : "csv",  
        		maximumFileSize : 1,
        		buttonOnly : true,
        		icon : "sap-icon://upload",
        		change : function(e){
        			var file = e.getParameter("files") && e.getParameter("files")[0];
        			if(file && window.FileReader){  
            			var reader = new FileReader();  
            			var that = this;  
            			reader.onload = function(evn) {  
                			var strCSV= evn.target.result; //string in CSV 
                			alert(strCSV);
                		};
            			reader.readAsText(file);  
            		}
            	}
    		});
		}

	});
});