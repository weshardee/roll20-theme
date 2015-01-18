$(onDomReady);

function onDomReady() {
	// detect opening of dialog
	$('body').on('dialogopen', onDialogOpen);

	function onDialogOpen(e) {
		var $maxBtn;
		var maximize;
		var dialog = e.target;
		var $dialog = $(dialog);
		var isSheetDialog = $dialog.hasClass('characterdialog');

		if (!isSheetDialog) {
			return;
		}

		$maxBtn = $('<div class="ui-dialog-max">max</div>');
		$dialog.prepend($maxBtn);

		$dialog.on('click', '.ui-dialog-max', toggleMax);
	}

	function toggleMax(e) {
		console.log(e);
		var $dialog = $(e.delegateTarget);
		$dialog.toggleClass('characterdialog-is-max');
	}
}