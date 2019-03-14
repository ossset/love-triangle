/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let x = preferences.length; 
  let y = 0;  
  for (let i = 0; i<x; i++) { 
      let a = preferences[i] - 1;
      if (a == i) continue;
      let b = preferences[a] - 1;
      if (b == a) continue;
      let c = preferences[b] - 1;
      if (b ==c) continue;
      if (c == i) {
          y++;
      }
   }
   return y/3;
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           