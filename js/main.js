(function () {
	$(document).ready(function () {
		$('input[type=tel]').mask('(99) 99999-999?9');
		$('input[type=tel]').click(function (event) {
			var elem = $('input[type=tel]')
			if(elem != null) {
				if(elem.createTextRange) {
					var range = elem.createTextRange();
					range.move('character', caretPos);
					range.select();
				}
				else {
					if(elem.selectionStart) {
						elem.focus();
						elem.setSelectionRange(caretPos, caretPos);
					}
					else
						elem.focus();
				}
			}
		});
	});

	// Formulário "Contato"
	$('#contato').submit(function (event) {
		var submit = $('#frm_contato input[type=submit]');
		submit.attr('disabled','disabled');
		submit.prop('disabled', true);
		submit.prop('value', 'Enviando');

		return true;
	});
})();

function afterSubmit2 () {
	var content = $('#contato_dyn');
	content.toggle(80);
	content.html('<span>Obrigado! Em breve entraremos em contato!</span>')
	content.toggle(80);
}
