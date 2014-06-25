'use strict';

var ko = require( 'ko' );

var i18n = require( 'br/I18n' );

function MybladeViewModel() {
	var epochDate = new Date( 1970, 0, 1 );
	var formattedDate = i18n.date( epochDate );
	var millisSinceEpoch = i18n.number( Date.now() );

	/*** new code ***/
	var params = {
		timestamp: formattedDate,
		epochmillis: millisSinceEpoch
	};

	var text = i18n( 'demo.blades.myblade.epochmessage', params)
	/*** end of new code ***/

	this.message = ko.observable( text );
}

module.exports = MybladeViewModel;
