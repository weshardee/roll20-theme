$(onDomReady);

function onDomReady() {
	var $body = $('body');

	// detect opening of dialog
	$body.on('dialogopen', onDialogOpen);

	function onDialogOpen(e) {
		var $maxBtn;
		var maximize;
		var dialog = e.target;
		var $dialog = $(dialog);
		var isSheetDialog = $dialog.hasClass('characterdialog');

		if (!isSheetDialog) {
			return;
		}

		$maxBtn = $('<div class="dialog-maxbtn">max</div>');
		$maxBtn.on('click', toggleMax);
		$dialog.prepend($maxBtn);
	}

	function toggleMax(e) {
		var $this = $(this);
		var $dialog = $this.closest('.ui-dialog');
		$dialog.toggleClass('ui-dialog-max');
		$body.toggleClass('has-maxed-dialog');
	}
}