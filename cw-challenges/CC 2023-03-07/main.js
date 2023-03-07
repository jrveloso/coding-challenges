function reduce(nums) {
  let output = [];

  nums.reduceRight((prod, curr, i) => {
    output[i] = prod;
    return prod * curr;
  });

  nums.reduce((prod, curr, i) => {
    output[i] *= prod;
    return prod * curr;
  });

  return output;
}
