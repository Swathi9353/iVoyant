import {useEffect } from 'react';

function EmptyDependencyExample () {
  useEffect(() => {
    console.log('Effect ran once');

    return () => {
      console.log('Cleanup on unmount');
    };
  }, []); // Empty dependency array

  return <div>
    Check the console log for messages.
  </div>;
}
export default EmptyDependencyExample;
