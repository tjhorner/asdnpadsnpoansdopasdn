$(document).ready(function(){
	function checkNames(){
		$.each($('.fbxWelcomeBoxName'), function(i,n){
			if($(this).attr('asdnpadsnpoansdopasdn') !== 'yes'){
				var nameArray = $(this).text().split(' ');
				nameArray[1] = nameArray[1] === undefined ? '' : nameArray[1];
				nameArray[1] = 'Asdnpadsnpoansdopasdn ' + nameArray[1];
				$(this).text(nameArray.join(' '));
				$(this).attr('asdnpadsnpoansdopasdn', 'yes');
			}
		});

		$.each($('._8_2'), function(i,n){
			if($(this).attr('asdnpadsnpoansdopasdn') !== 'yes'){
				var nameArray = $(this).text().split(' ');
				nameArray[1] = nameArray[1] === undefined ? '' : nameArray[1];
				nameArray[1] = 'Asdnpadsnpoansdopasdn ' + nameArray[1];
				$(this).text(nameArray.join(' '));
				$(this).attr('asdnpadsnpoansdopasdn', 'yes');
			}
		});

		$.each($('.profileLink'), function(i,n){
			if($(this).attr('asdnpadsnpoansdopasdn') !== 'yes'){
				var nameArray = $(this).text().split(' ');
				nameArray[1] = nameArray[1] === undefined ? '' : nameArray[1];
				nameArray[1] = 'Asdnpadsnpoansdopasdn ' + nameArray[1];
				$(this).text(nameArray.join(' '));
				$(this).attr('asdnpadsnpoansdopasdn', 'yes');
			}
		});

		$.each($('.UFICommentActorName'), function(i,n){
			if($(this).attr('asdnpadsnpoansdopasdn') !== 'yes'){
				var nameArray = $(this).text().split(' ');
				nameArray[1] = nameArray[1] === undefined ? '' : nameArray[1];
				nameArray[1] = 'Asdnpadsnpoansdopasdn ' + nameArray[1];
				$(this).text(nameArray.join(' '));
				$(this).attr('asdnpadsnpoansdopasdn', 'yes');
			}
		});

		$.each($('.fwb'), function(i,n){
			if($(this).attr('asdnpadsnpoansdopasdn') !== 'yes'){
				var anchor = $($(this).find('a')[0]);
				var nameArray = anchor.text().split(' ');
				nameArray[1] = 'Asdnpadsnpoansdopasdn ' + nameArray[1];
				anchor.text(nameArray.join(' '));
				$(this).attr('asdnpadsnpoansdopasdn', 'yes');
			}
		});

		$.each($('._55lr'), function(i,n){
			if($(this).attr('asdnpadsnpoansdopasdn') !== 'yes'){
				var nameArray = $(this).text().split(' ');
				nameArray[1] = nameArray[1] === undefined ? '' : nameArray[1];
				nameArray[1] = 'Asdnpadsnpoansdopasdn ' + nameArray[1];
				$(this).text(nameArray.join(' '));
				$(this).attr('asdnpadsnpoansdopasdn', 'yes');
			}
		});
	}
	setInterval(checkNames, 500);
});