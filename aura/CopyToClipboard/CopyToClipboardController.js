({
	textCopy : function(component, event, helper) {
		var copiedText = component.find('text_Input').get('v.value'); // Store the text area value in a variable
        //alert(copiedText); To verify if copied text is coming or not
        helper.copyTextHelp(component, event, copiedText); // Call the helper method
	}
})