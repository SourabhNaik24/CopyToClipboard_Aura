({
	copyTextHelp : function(component, event, copiedText) {
        // Create a variable and set its attribute as the value coming to helper
		var inputCopy = document.createElement("Input");
        inputCopy.setAttribute("value", copiedText);
        
        // Append the text node to the created variable
        document.body.appendChild(inputCopy);
        // Select the text area
        inputCopy.select();
        
        // Copy the text area
        document.execCommand("copy");
        // Remove the text node from the created variable
        document.body.removeChild(inputCopy);
        
        // Store the original button label
        var beforeClicked = event.getSource().get('v.label');
        
        // Change the label and icon of button for copied
        event.getSource().set('v.label','Copied');
        event.getSource().set('v.iconName','utility:check');
        
        // Keep that copied stage for 2000ms and then change it back to original stage
        setTimeout(function(){
            event.getSource().set('v.label',beforeClicked);
        	event.getSource().set('v.iconName','utility:copy_to_clipboard');
        },2000)
	}
})