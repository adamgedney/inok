/**
 * GraphQL helper fn to clean ENum strings
 * props: is an array of strings representing which graphql props are ENUMs ['operator']
 * 
 * Example: enum_convert(query, ["order"])
 * @param {*} str 
 * @param {*} props 
 */
export const enum_convert = (str, props) => {
  let _str = str;

  props.forEach(prop => {
    let regex = new RegExp(prop, "gi"),
      result,
      indices = [];

    // Trick to loop through string and get indices on regex match
    const matchesArray = _str.replace(regex, (match, indx) => {
      indices.push(indx);
      return true;
    });

    // Loop through to handle mutating each occurance of the substring in the full string
    indices.forEach(index => {
      let firstQuote = false,
        secondQuote = false;

      for (let i = 1; i < _str.length; i++) {
        let char = _str[i];

        if (i > index) {
          if (firstQuote && secondQuote) {
            return false;
          }

          if (char === '"') {
            if (firstQuote && !secondQuote) {
              secondQuote = i;

              break;
            }

            firstQuote = i;
          }
        }
      }

      // Now that we have the index of the ENUM value's quotes, remove the quotes
      _str = _str.split("");
      _str.splice(firstQuote, 1);
      _str.splice(secondQuote - 1, 1);
      _str = _str.join("");
    });
  });

  return _str;
};
