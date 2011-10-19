/*
 * trace.async.js
 * Simple debugging tool.
 * See trace.readme.txt for further information.
 *
 * Copyright(c) 2009 Atsushi Oka [ http://oka.nu/ ]
 * This script file is distributed under the LGPL
 */
function initTrace(packageRoot) {
    if ( packageRoot.__PACKAGE_ENABLED ) {
	__unit( "trace.js" );
    }
    function trace( s ) {
	document.write( "<pre style='display:inline;'>" + s + "</pre><br>" );
    }
    packageRoot.trace = trace;
}

initTrace( this );
