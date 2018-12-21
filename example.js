// split this list of examples into primitives & not, one file for each
//  primitives will be required
//  others are for next-steppers

{/* sets and membership
  a set is a collection of unique items (no replicants)
  who all match a certain criteria
  for this week, we will determine membership by 'typeof'
  so our sets are
    'number'
    'string'
    'undefined'
    'boolean'
    'object'
    'function'
    'symbol'
  or we can assert if it is what we are looking for
    typeof a === 'string' //-> true or false
  everything in javascript belongs to one of these sets.
    the goal of this exercise is to build a function that sorts everything into it's appropriate set
  for the remainder of this week we will ignore 'object', 'function' & 'symbol' types
*/
/* challenges: look into 
    instanceof: new Number(3) vs 3, ...
    { ...
      'object': {
          'Array': [],
          'Number': [],
          ...
        }
    }
*/


/* how to exercisify this?
  run it, identify what happened to each item in the array
  can put anything in an array and it will get sorted
*/



{ console.log('--- simple "empty" values ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [
      '', 
      0, 
      undefined, 
      false, 
      {}, 
      function(){},
      Symbol()
    ]

  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- typeof results ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [
      typeof '', 
      typeof 0, 
      typeof undefined, 
      typeof false, 
      typeof {}, 
      typeof function(){},
      typeof Symbol()
    ]

  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}


{ console.log('--- many things are "object"s ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [
      {}, [], new Date(), null, new Set(), new Map(), new Array(), new Number()
    ]

  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- primitives are not unique in memory ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [
      undefined, undefined, 3, 3, 'w', 'w', null, null, true, true
    ]

  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- objects, symbols & functions are unique in memory ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [
      {}, {}, {a:0}, {a:0}, [], [], [1], [1], Symbol(), Symbol(), function(){}, function(){}
    ]

  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- typeof registers return values ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [
      ({}).a, 3 + 3, ([]).push(3 > 4)
    ]

  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- reference types vs primitive types ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const ref_a = {};
  const ref_b = ref_a;

  const val_a = 0;
  const val_b = val_a;

  const elements = [
      ref_a, ref_b, val_a, val_b 
    ]

  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- all ways of declaring functions are still functions ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [
      function(){}, function named(){}, x=>x, (x)=>{return x}
    ]

  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- arrays push values, not variables ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  let a = 0;
  const elements = [a]
  a = 1;
  elements.push(a)
  a = {}
  elements.push(a)


  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- type-cast functions ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [Number, Boolean, String]


  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- numbers are weird ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [-0, 0, +0, NaN, Infinity, 1000, 1e3, 0.0, 1000.0]


  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- there are only two booleans ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [true, false, 3 == '3', 3 === '3']


  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}


{ console.log('--- there are only two booleans ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [true, false, 3 == '3', 3 === '3']


  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}

{ console.log('--- weird ---')
  const sets = { 
      'string': [], 'number': [], 
      'undefined': [], 'boolean': [], 
      'object': [], 'function': [], 'symbol': []
    }

  const elements = [new Number(3), 3, [1], new Array(1), '', new String(), true, new Boolean(1)]


  for (let element of elements) {
    let unique; { // !_sets[typeof element].includes(element);
      const step_1 = typeof element;
      const step_2 = sets[step_1];
      const step_3 = step_2.includes(element);
      const step_4 = !step_3;
      unique = step_4;
    };

    if (unique) {
      sets[typeof element].push(element)
    }
  }

  console.log(sets)
}


}