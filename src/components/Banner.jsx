import Typed from "typed.js";
import React from "react";

import "./banner.css";

const TypedReactHooksDemo = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Governo liberal destrói o Estado!',
        'O Estado atual tributa os mais carentes!',
        'O Auditor-Fiscal defende a justiça social!'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      loop: true,
      loopCount: 1000
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
      <div className="wrap type-wrap">
        <h1 style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
  );
}

export default (_) =>
  <div id="banner">
    <TypedReactHooksDemo />
  </div>