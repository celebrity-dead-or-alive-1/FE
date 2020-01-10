//Two buttons maps answers rendering 0 or 1
// basic buttons...figure out *where* the logic lives for the red or green and okay button.

import React from 'react';

export default function Button(set) {
  console.log('Alive? ' + set.check);
  if (set.value === 'true' && set.check === true) {
    return;
  }

  return (
    <button className='mainButton' value={set.value}>
      {set.text}
    </button>
  );
}
